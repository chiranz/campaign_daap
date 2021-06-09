import React, { ReactElement } from "react";
import { joinClasses } from "../../utils";

interface Props {
  value?: any;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  unit?: string;
  placeHolder: string;
  type?: string;
  error?: string;
  marginTop?: number;
  marginBottom?: number;
}

export default function InputField({
  value,
  onChange,
  unit,
  placeHolder,
  type = "text",
  error,
  marginBottom,
  marginTop,
}: Props): ReactElement {
  return (
    <div
      className={joinClasses(
        "relative",
        "flex",
        "flex-wrap",
        "items-stretch",
        "w-full",
        marginTop && `mt-${marginTop}`,
        marginBottom && `mt-${marginBottom}`
      )}
    >
      <input
        type={type}
        value={value ? value : ""}
        onChange={onChange}
        placeholder={placeHolder}
        className={joinClasses(
          "relative",
          "block",
          "w-full",
          "px-4",
          "py-3",
          "leading-tight",
          "text-gray-700",
          "bg-gray-200",
          "border",
          "border-gray-200",
          "rounded",
          "appearance-none",
          "focus:outline-none",
          "focus:bg-white",
          "focus:border-gray-500"
        )}
      />
      <span
        className={joinClasses(
          "absolute",
          "right-0",
          "z-10",
          "items-center",
          "justify-center",
          "h-full",
          "text-base",
          "font-normal",
          "leading-snug",
          "text-center",
          "bg-transparent",
          "rounded",
          "text-blueGray-300"
        )}
      >
        {unit && (
          <button
            className={joinClasses(
              "cursor-text",
              "py-3",
              "px-3",
              "font-bold",
              "text-gray-800",
              "bg-gray-300",
              "rounded-r"
            )}
          >
            {unit}
          </button>
        )}
      </span>
      <span className="flex items-center mt-1 ml-1 text-xs font-medium tracking-wide text-red-500">
        {error}
      </span>
    </div>
  );
}
