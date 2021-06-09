import React, { ReactElement } from "react";
import { ethers } from "ethers";
import { campaignFactoryDetails, getProvider } from "../utils/factory";

type Props = {
  url: {};
  campaigns: [];
};

function Index({ campaigns }: Props): ReactElement {
  console.log(campaigns);
  return (
    <div>
      <h1>Campaigns</h1>
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
  const campaigns = await contract.getDeployedCampaigns();
  return { campaigns };
};

export default Index;
