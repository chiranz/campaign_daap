import { ethers } from "ethers";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { campaignContractABI, getProvider } from "../utils/factory";
import ButtonWithLoader from "./tailwind/ButtonWithLoader";
import InputField from "./tailwind/InputField";

interface Props {
  address: string;
  minimumContribution: string;
}

export default function ContributeForm({
  address,
  minimumContribution,
}: Props): ReactElement {
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [error, setError] = React.useState(null);
  const router = useRouter();

  const handleContributionValueChange = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setLoading(false);
    setError(null);
    setValue(e.currentTarget.value);
  };
  const handleContribute = async () => {
    if (value === "" || value === null || value === undefined) {
      setError("Input field can't be empty");
      return;
    }
    setLoading(true);
    try {
      const provider = await getProvider();
      console.log(provider);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        address,
        campaignContractABI,
        signer
      );
      console.log(contract);
      const transaction = await contract.contribute({
        value: value,
      });

      const result = await transaction.wait();
      console.log(result);
    } catch (err) {
      setError(err.message);
    }
    router.replace(`/campaigns/${address}`);

    setLoading(false);
    setValue(null);
  };
  return (
    <>
      <form>
        <legend className="text-2xl font-bold">
          Contribute to this campaign
        </legend>
        <div className="mt-4">
          <InputField
            placeHolder={`Min Amount ${minimumContribution} wei`}
            onChange={handleContributionValueChange}
            value={value}
            error={error}
            type="number"
          />
        </div>
        <div className="flex justify-end mt-2">
          <ButtonWithLoader
            actionText="Contribute"
            onSubmit={handleContribute}
            loading={loading}
          />
        </div>
      </form>
    </>
  );
}
