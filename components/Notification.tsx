import React, { ReactElement } from "react";

interface Props {
  header: string;
  content: string;
  type?: "success" | "danger" | "warning" | "primary";
}

export default function GlobalNotification({
  header,
  content,
  type = "primary",
}: Props): ReactElement {
  const [alert, setAlert] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  });
  const colors = {
    success: "green",
    danger: "red",
    warning: "yellow",
    primary: "blue",
  };
  if (!alert) return null;
  return (
    <div role="alert">
      <div
        className={`bg-${colors[type]}-500 flex justify-between text-white font-bold rounded-t px-4 py-2`}
      >
        <div>{header}</div>
        <div className="cursor-pointer" onClick={() => setAlert(false)}>
          X
        </div>
      </div>
      <div
        className={`border border-t-0 border-${colors[type]}-400 rounded-b bg-${colors[type]}-100 px-4 py-3 text-${colors[type]}-700`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}

export function ModernBadge(): ReactElement {
  return (
    <div className="py-4 text-center bg-indigo-900 lg:px-4">
      <div
        className="flex items-center p-2 leading-none text-indigo-100 bg-indigo-800 lg:rounded-full lg:inline-flex"
        role="alert"
      >
        <span className="flex px-2 py-1 mr-3 text-xs font-bold uppercase bg-indigo-500 rounded-full">
          New
        </span>
        <span className="flex-auto mr-2 font-semibold text-left">
          Get the coolest t-shirts from our brand new store
        </span>
        <svg
          className="w-4 h-4 opacity-75 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </div>
    </div>
  );
}
export function LeftBorderInfo(): ReactElement {
  return (
    <div
      className="p-4 text-yellow-700 bg-yellow-100 border-l-4 border-yellow-500"
      role="alert"
    >
      <p className="font-bold">Be Warned</p>
      <p>Something not ideal might be happening.</p>
    </div>
  );
}

export function TitledInfo(): ReactElement {
  return (
    <div role="alert">
      <div className="px-4 py-2 font-bold text-white bg-red-500 rounded-t">
        Danger
      </div>
      <div className="px-4 py-3 text-red-700 bg-red-100 border border-t-0 border-red-400 rounded-b">
        <p>Something not ideal might be happening.</p>
      </div>
    </div>
  );
}
export function TopBorderInfo(): ReactElement {
  return (
    <div
      className="px-4 py-3 text-purple-900 bg-purple-100 border-t-4 border-purple-500 rounded-b shadow-md"
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <svg
            className="w-6 h-6 mr-4 text-purple-500 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p className="font-bold">Our privacy policy has changed</p>
          <p className="text-sm">
            Make sure you know how these changes affect you.
          </p>
        </div>
      </div>
    </div>
  );
}
