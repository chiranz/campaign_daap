/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/solid";

Modal.setAppElement("#__next");
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const currencies = ["CAD", "USD", "GBP", "MXN", "AUD", "EUR", "NOK"];

export default function Index(): ReactElement {
  const router = useRouter();
  const handleClose = () => {
    router.push("/modal/");
  };
  return (
    <div>
      <ul>
        {currencies.map((currency, index) => (
          <li key={index} style={{ marginTop: "10rem" }}>
            <Link
              href={`/modal/?currencyCode=${currency}`}
              as={`/modal/${currency}`}
            >
              <a>{currency}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Modal
        style={modalStyles}
        isOpen={!!router.query.currencyCode}
        onRequestClose={() => router.push("/modal/")}
      >
        <div className="px-3 py-4 bg-gray-200 rounded shadow-xl">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Start Campaign</h2>
            <XIcon
              onClick={handleClose}
              className="w-6 h-6 cursor-pointer hover:text-gray-500"
            />
          </div>
          <div className="mt-4">
            In the Modal with {router.query.currencyCode}
            <input
              value=""
              className="px-2 py-4 placeholder-gray-500 rounded"
              type="number"
              name="minContribution"
              id="minContribution"
              placeholder="Minimum Contribution"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={handleClose}
              className="px-3 py-1 bg-opacity-50 rounded hover:bg-red-300 hover: hover:text-red-800"
            >
              Cancel
            </button>
            <button className="px-3 py-1 text-gray-200 bg-red-800 rounded hover:border-current hover:bg-red-900">
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
