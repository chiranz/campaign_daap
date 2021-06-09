import { ethers } from "ethers";
import React, { ReactElement } from "react";
import Dashboard from "../../components/Dashboard";
import ButtonWithLoader from "../../components/tailwind/ButtonWithLoader";
import InputField from "../../components/tailwind/InputField";
import { campaignFactoryDetails, getProvider } from "../../utils/factory";

export default function StartCampaign(): ReactElement {
  const [minContribution, setMinContribution] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (minAmount: number) => {
    setLoading(true);
    const provider = await getProvider();
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      campaignFactoryDetails.address,
      campaignFactoryDetails.abi,
      signer
    );
    const transaction = await contract.createCampaign(minAmount);
    console.log(transaction);
    const result = await transaction.wait();
    console.log(result);

    setLoading(false);
    setMinContribution(null);
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMinContribution(e.currentTarget.value);
  };
  return (
    <Dashboard title="Start New Campaign">
      <form className="flex justify-center w-full h-full align-middle">
        <div className="w-full h-full max-w-xl mt-8">
          <InputField
            value={minContribution}
            onChange={handleChange}
            placeHolder="Minimum Contribution"
            unit="wei"
            type="number"
          />
          <div className="float-right">
            <ButtonWithLoader
              loading={loading}
              actionText="Create Campaign"
              onSubmit={() => handleSubmit(minContribution)}
              marginTop={4}
            />
          </div>
        </div>
      </form>
    </Dashboard>
  );
}
