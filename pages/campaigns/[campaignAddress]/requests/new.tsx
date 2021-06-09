/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from "react";
import { NextRouter, useRouter } from "next/router";
import Dashboard from "../../../../components/Dashboard";
import InputField from "../../../../components/tailwind/InputField";
import ButtonWithLoader from "../../../../components/tailwind/ButtonWithLoader";
import { campaignContractABI, getProvider } from "../../../../utils/factory";
import { ethers } from "ethers";
import Link from "next/link";

interface RouterProps extends NextRouter {
  query: {
    campaignAddress?: string;
  };
}

export default function New(): ReactElement {
  const [loading, setLoading] = React.useState(false);
  const [description, setDescription] = React.useState(null);
  const [amount, setAmount] = React.useState(null);
  const [recepient, setRecepient] = React.useState(null);
  const [globalError, setGlobalError] = React.useState(null);
  const isEmpty = (value: any) => {
    if (value === undefined || value === null || value === "") {
      return true;
    }
    return false;
  };

  const verifyInputs = () => {
    const emptyField =
      isEmpty(description) || isEmpty(recepient) || isEmpty(amount);
    if (emptyField) {
      setGlobalError("Fields can't be empty.");
      return false;
    }
    return true;
  };

  const router = useRouter();
  const {
    query: { campaignAddress },
  }: RouterProps = router;

  const handleSubmit = async () => {
    const inputsVerified: boolean = verifyInputs();
    if (!inputsVerified) {
      return;
    }
    setLoading(true);
    try {
      const provider = await getProvider();
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        campaignAddress,
        campaignContractABI,
        signer
      );
      const transaction = await contract.createRequest(
        description,
        amount,
        recepient
      );
      await transaction.wait();
      setLoading(false);
      setAmount(null);
      setDescription(null);
      setRecepient(null);
      setGlobalError(null);
      router.push(`/campaigns/${campaignAddress}/requests`);
    } catch (error) {
      try {
        const msg = error.error.message;
        // eslint-disable-next-line eqeqeq
        if (msg == "execution reverted: Not a manager") {
          setGlobalError("You must be a manager to create new request!!");
        } else {
          setGlobalError(msg);
        }
      } catch {
        setGlobalError(error.message);
      }
      setLoading(false);
    }
  };

  return (
    <Dashboard title={`Create New Request for ${campaignAddress} `}>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Link href={`/campaigns/${campaignAddress}/requests`}>
          <a className="text-blue-800">Back</a>
        </Link>
        <span className="items-center max-w-md mb-2 font-bold text-red-500 text-md">
          {globalError}
        </span>
        <form action="" className="">
          <InputField
            placeHolder="Description"
            onChange={(e) => setDescription(e.currentTarget.value)}
            value={description}
          />
          <InputField
            placeHolder="value"
            type="number"
            unit="wei"
            marginTop={4}
            onChange={(e) => setAmount(e.currentTarget.value)}
            value={amount}
          />
          <InputField
            placeHolder="Recepient"
            marginTop={4}
            onChange={(e) => setRecepient(e.currentTarget.value)}
            value={recepient}
          />
          <div className="float-right">
            <ButtonWithLoader
              actionText="Add Request"
              loading={loading}
              onSubmit={handleSubmit}
              marginTop={2}
            />
          </div>
        </form>
      </div>
    </Dashboard>
  );
}
