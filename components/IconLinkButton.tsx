/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from "react";
import Link from "next/link";
import { joinClasses } from "../utils";
type Props = {
  urls?: {};
  icon?: React.ReactNode;
  title?: string;
  href: string;
  actionText?: string;
};

function IconLinkButton({
  icon,
  title,
  href,
  actionText,
}: Props): ReactElement {
  return (
    <>
      <Link href={href}>
        <a
          title={title}
          className={joinClasses(
            "inline-flex",
            "items-center",
            "px-4",
            "py-2",
            "ml-4",
            "space-x-2",
            "font-semibold",
            "text-white",
            "align-middle",
            "bg-red-500",
            "rounded",
            "focus:outline-none"
          )}
        >
          {icon}
          <span>{actionText}</span>
        </a>
      </Link>
    </>
  );
}

export default IconLinkButton;
