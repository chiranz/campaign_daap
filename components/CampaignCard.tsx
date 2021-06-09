/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from "react";
import Link from "next/link";

interface Props {
  details: {
    address: string;
  };
}

export default function CampaignCard({
  details: { address },
}: Props): ReactElement {
  return (
    <div>
      <div className="px-8 py-4 my-20 bg-white rounded-lg shadow-lg ">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{address}</h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptate blanditiis omnis aperiam est repudiandae iste natus ab
            cupiditate voluptatibus qui!
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <Link href={`/campaigns/${address}`}>
            <a className="text-lg font-medium text-indigo-500">View Campaign</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
