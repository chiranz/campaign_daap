import React, { ReactElement } from "react";
import { NextRouter, useRouter } from "next/router";
import { campaignContractABI, getProvider } from "../../../utils/factory";
import { ethers } from "ethers";
import Card from "../../../components/tailwind/Card";
import Dashboard from "../../../components/Dashboard";
import ContributeForm from "../../../components/ContributeForm";
import IconLinkButton from "../../../components/IconLinkButton";

interface RouterProps extends NextRouter {
  query: {
    campaignAddress?: string;
  };
}
type SummaryProps = {
  minimumContribution: ethers.BigNumber;
  balance: ethers.BigNumber;
  requestCount: ethers.BigNumber;
  contributorCount: ethers.BigNumber;
  manager: string;
};
export function numberFromBigNumber(bigNum: ethers.BigNumber) {
  return ethers.BigNumber.from(bigNum).toNumber().toString();
}
type CardProps = {
  heading?: string;
  description?: string;
  meta?: string;
  id: string;
};

export default function Index({
  minimumContribution,
  balance,
  requestCount,
  contributorCount,
  manager,
}: SummaryProps): ReactElement {
  const router = useRouter();
  const {
    query: { campaignAddress },
  }: RouterProps = router;
  const cardItems: CardProps[] = [
    {
      id: "manager",
      description:
        "The manager who started this campaign and can create requests to spend the funds raised for campaign on specific tasks.",
      heading: manager,
      meta: "Address of a manager",
    },
    {
      id: "min",
      description:
        "You must contribute at least this much wei to become a contributor.",
      heading: numberFromBigNumber(minimumContribution),
      meta: "Minimum Contribution (Wei)",
    },
    {
      id: "requests",
      description: `Number of requests created by the manager for spending to fulfill the campaign's motive. Request tries to withdraw money from the total campaign balance to complete specific task.`,
      heading: numberFromBigNumber(requestCount),
      meta: "Number of requests",
    },
    {
      id: "balance",
      description:
        "Total balance in WEI added by contributors to make campaign successful.",
      heading: numberFromBigNumber(balance),
      meta: "Balance of Campaign",
    },
    {
      id: "contributors",
      description:
        "Total number of contributers who have funded this campaign.",
      heading: numberFromBigNumber(contributorCount),
      meta: "Number of contributors",
    },
  ];
  return (
    <Dashboard title={campaignAddress}>
      <div>
        <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-3">
          <div className="grid gap-4 lg:col-span-3 md:col-span-2 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1">
            {cardItems.map((item, index) => (
              <div key={index}>
                <Card
                  heading={item.heading}
                  description={item.description}
                  meta={item.meta}
                  actionButton={
                    item.id === "requests" ? (
                      <IconLinkButton
                        href={`/campaigns/${campaignAddress}/requests`}
                        actionText="View Requests"
                      />
                    ) : null
                  }
                />
              </div>
            ))}
          </div>
          <div className="col-span-1">
            <ContributeForm
              address={campaignAddress}
              minimumContribution={numberFromBigNumber(minimumContribution)}
            />
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
type CampaignInitialProps = {
  query: {
    campaignAddress: string;
  };
};

Index.getInitialProps = async (props: CampaignInitialProps) => {
  const { campaignAddress } = props.query;
  const provider = await getProvider();
  const contract = new ethers.Contract(
    campaignAddress,
    campaignContractABI,
    provider
  );
  const summary = await contract.getSummary();

  return {
    minimumContribution: summary[0],
    balance: summary[1],
    requestCount: summary[2],
    contributorCount: summary[3],
    manager: summary[4],
  };
};
