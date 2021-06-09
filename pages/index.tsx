import React, { ReactElement, useEffect, useState } from "react";
import { ethers } from "ethers";
import { campaignFactoryDetails, getProvider } from "../utils/factory";
// import Table from "../components/Table";
import Dashboard from "../components/Dashboard";
import CampaignCard from "../components/CampaignCard";
import IconLinkButton from "../components/IconLinkButton";
import PlusIcon from "@heroicons/react/solid/PlusIcon";

type Props = {
  url: {};
  campaigns: [];
};

export default function Index({ campaigns }: Props): ReactElement {
  const [ethereum, setEthereum] = useState(null);

  useEffect(() => {
    setEthereum((window as any).ethereum);
    async function requestAccount() {
      if (ethereum) {
        await ethereum.request({ method: "eth_requestAccounts" });
      }
    }
    requestAccount();
  }, [ethereum]);

  return (
    <div>
      <Dashboard title="Open Campaigns">
        <div>
          {campaigns.map((address, index) => (
            <CampaignCard
              key={index}
              details={{
                address,
              }}
            />
          ))}
        </div>
        <IconLinkButton
          href="/campaigns/new"
          icon={<PlusIcon height="1rem" width="1rem" />}
          actionText="Start Campaign"
        />
      </Dashboard>
    </div>
  );
}

Index.getInitialProps = async () => {
  const provider = await getProvider();
  const contract = new ethers.Contract(
    campaignFactoryDetails.address,
    campaignFactoryDetails.abi,
    provider
  );
  const campaigns: string[] = await contract.getDeployedCampaigns();
  return { campaigns };
};
