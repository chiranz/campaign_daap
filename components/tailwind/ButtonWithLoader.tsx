import React, { ReactElement } from "react";
import { joinClasses } from "../../utils";

type ButtonProps = {
  loading?: boolean;
  actionText: string;
  onSubmit: () => void;
  marginTop?: number;
  marginLeft?: number;
};

function ButtonWithLoader({
  loading,
  actionText,
  onSubmit,
  marginTop,
  marginLeft,
}: ButtonProps): ReactElement {
  return (
    <button
      type="submit"
      disabled={loading}
      className={joinClasses(
        "flex",
        "justify-center",
        "px-3",
        "py-1",
        "text-center",
        "text-gray-200",
        "align-middle",
        "bg-red-800",
        "rounded",
        "disabled:opacity-50",
        "hover:border-current ",
        "hover:bg-red-900",
        "relative",
        loading ? "cursor-not-allowed" : "",
        marginTop ? `mt-${marginTop}` : "",
        marginLeft ? `ml-${marginLeft}` : ""
      )}
      onClick={onSubmit}
    >
      {loading && (
        <div
          className={joinClasses(
            "absolute",
            "w-5",
            "h-5",
            "mr-2",
            "border-t-2",
            "border-white",
            "rounded-full",
            "animate-spin",
            "uppercase"
          )}
        ></div>
      )}
      <span className="relative">{actionText}</span>
    </button>
  );
}

export default ButtonWithLoader;
