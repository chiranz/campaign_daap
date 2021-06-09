import React, { ReactElement } from "react";
import { getEtherScanUrl } from "../utils";
interface Request {
  description: string;
  amount: number;
  recepient: string;
  complete: boolean;
  approvalCount: number;
}
const requests: Request[] = [
  {
    amount: 10000,
    description: "Buy Fret board",
    recepient: "Address",
    complete: false,
    approvalCount: 100,
  },
  {
    amount: 20000,
    description: "Buy Fret board",
    recepient: "Address",
    complete: true,
    approvalCount: 100,
  },
  {
    description: "Buy Fret board",
    amount: 10000,
    recepient: "Address",
    approvalCount: 100,
    complete: false,
  },
];

export default function Table() {
  const headings = [
    "description",
    "amount",
    "recepient address",
    "approval count",
    "complete",
  ];
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <TableHeader items={headings} />
              <TableBody requests={requests} />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
type HeaderProps = {
  items: string[];
};

function TableHeader({ items }: HeaderProps): ReactElement {
  const getHeadings = () => {
    const headings = items.map((item) => {
      return (
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          {item}
        </th>
      );
    });
    return headings;
  };
  return (
    <thead className="bg-gray-50">
      <tr>{getHeadings()}</tr>
    </thead>
  );
}

type BodyProps = {
  requests: Request[];
};
function TableBody({ requests }: BodyProps): ReactElement {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {requests.map((request, index) => (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {request.description}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {request.amount}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
            <a
              rel="noreferrer"
              target="_blank"
              className="hover:underline"
              href={getEtherScanUrl(request.recepient)}
            >
              {request.recepient}
            </a>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {request.approvalCount}
          </td>
          {request.complete ? (
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Completed
              </span>
            </td>
          ) : (
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                Pending
              </span>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
}
