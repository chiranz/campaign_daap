import React, { ReactElement } from "react";
import { NextRouter, useRouter } from "next/router";
import IconLinkButton from "../../../../components/IconLinkButton";
import Dashboard from "../../../../components/Dashboard";
import { campaignContractABI, getProvider } from "../../../../utils/factory";
import { ethers } from "ethers";
import { numberFromBigNumber } from "..";
import { joinClasses } from "../../../../utils";
import ButtonWithLoader from "../../../../components/tailwind/ButtonWithLoader";

interface RouterProps extends NextRouter {
  query: {
    campaignAddress?: string;
  };
}

type RequestProps = {
  requests: Request[];
  manager: string;
};
// TODO: Auto refresh page when the user changes his metamask account

export default function Requests({
  requests,
  manager,
}: RequestProps): ReactElement {
  const router = useRouter();
  const {
    query: { campaignAddress },
  }: RouterProps = router;

  return (
    <Dashboard title={`${campaignAddress} Requests`}>
      <div>
        <IconLinkButton
          href={`/campaigns/${campaignAddress}/requests/new`}
          actionText="New Request"
        />
        <div className="grid gap-4 mt-4 lg:grid-cols-2 md:grid-cols-1">
          {requests.map((request, index) => (
            <div className="" key={index}>
              <RequestCard
                request={request}
                requestId={index}
                address={campaignAddress}
                manager={manager}
              />
            </div>
          ))}
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
type Request = {
  description: string;
  amount: string;
  recepient: string;
  complete: boolean;
  approvalCount: string;
};

Requests.getInitialProps = async (props: CampaignInitialProps) => {
  const { campaignAddress } = props.query;
  const provider = await getProvider();
  const contract = new ethers.Contract(
    campaignAddress,
    campaignContractABI,
    provider
  );
  const requests: any[] = await contract.getRequests();
  const manager = await contract.manager();
  const formattedRequests: Request[] = [];
  for (let request of requests) {
    formattedRequests.push({
      amount: numberFromBigNumber(request.amount),
      description: request.description,
      recepient: request.recepient,
      complete: request.complete,
      approvalCount: numberFromBigNumber(request.approvalCount),
    });
  }

  return {
    requests: formattedRequests,
    manager,
  };
};
type RequestCardProps = {
  request: Request;
  requestId: number;
  address: string;
  manager: string;
};

const RequestCard = ({
  request: { description, complete, approvalCount, amount, recepient },
  requestId,
  address,
  manager,
}: RequestCardProps) => {
  const [signer, setSigner] = React.useState(null);
  React.useEffect(() => {
    const _setSigner = async () => {
      const provider = await getProvider();
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setSigner(address);
    };
    _setSigner();
  }, []);
  const isManager = () => signer === manager;
  return (
    <div
      className={joinClasses(
        "px-4",
        "py-2",
        "border",
        "border-gray-300",
        "rounded",
        "break-words"
      )}
    >
      <div>
        <h2 className="text-xl font-bold">{description}</h2>
        <small className={`text-sm text-${complete ? "green" : "yellow"}-400`}>
          {complete ? "Completed" : "Pending"}
        </small>
      </div>
      <h1>Amount: {amount}</h1>
      <h1>Approval Count: {approvalCount}</h1>
      <h1>Recepient: {recepient}</h1>

      {!complete && (
        <div
          className={`${
            isManager() ? "flex justify-between items-center" : "text-center"
          }`}
        >
          <ApproveRequestButton requestId={requestId} address={address} />
          {signer === manager && (
            <FinalizeRequestButton requestId={requestId} address={address} />
          )}
        </div>
      )}
    </div>
  );
};

const ApproveRequestButton = ({ requestId, address }) => {
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  const handleApprove = async () => {
    setLoading(true);
    try {
      const provider = await getProvider();
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        address,
        campaignContractABI,
        signer
      );
      const transaction = await contract.approveRequest(requestId);

      await transaction.wait();
    } catch (err) {
      console.log(err);
    }

    router.replace(`/campaigns/${address}/requests`);
    setLoading(false);
  };
  return (
    <ButtonWithLoader
      loading={loading}
      actionText="Approve Request"
      onSubmit={handleApprove}
    />
  );
};

const FinalizeRequestButton = ({ requestId, address }) => {
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  const handleFinalize = async () => {
    setLoading(true);
    try {
      const provider = await getProvider();
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        address,
        campaignContractABI,
        signer
      );
      const transaction = await contract.finalizeRequest(requestId);

      await transaction.wait();
    } catch (err) {
      console.log(err);
    }

    router.replace(`/campaigns/${address}/requests`);
    setLoading(false);
  };
  return (
    <ButtonWithLoader
      loading={loading}
      actionText="Finalize Request"
      onSubmit={handleFinalize}
    />
  );
};
