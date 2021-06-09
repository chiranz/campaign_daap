import React, { ReactElement } from "react";
import { joinClasses } from "../../utils";

interface Props {
  heading?: string;
  description?: string;
  actionButton?: React.ReactNode;
  meta?: string;
}

export default function Card({
  heading,
  description,
  meta,
  actionButton,
}: Props): ReactElement {
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
        <h2 className="text-xl font-bold">{heading}</h2>
        <small className="text-sm text-gray-400">{meta}</small>
      </div>
      <p>{description}</p>
      <div className="text-center">{actionButton}</div>
    </div>
  );
}
