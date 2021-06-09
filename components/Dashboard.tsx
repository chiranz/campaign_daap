/* This example requires Tailwind CSS v2.0+ */
import PlusIcon from "@heroicons/react/solid/PlusIcon";
import React, { ReactElement } from "react";
import IconLinkButton from "./IconLinkButton";

type DashboardProps = {
  children?: React.ReactNode;
  title?: string;
};

export default function Dashboard({ children, title }: DashboardProps) {
  return (
    <div>
      <Navbar />
      <Header title={title} />
      <main className="w-full h-full">
        <div className="flex items-start py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
type HeaderProps = {
  title: string;
};
function Header({ title }: HeaderProps): ReactElement {
  return (
    <header className="bg-white shadow">
      <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      </div>
    </header>
  );
}

function Navbar() {
  return (
    <nav className="bg-gray-700">
      <div className="flex justify-between py-4 mx-auto text-white max-w-7xl">
        <a href="/">
          <h1 className="text-xl font-bold uppercase">Campaign</h1>
        </a>
        <IconLinkButton
          icon={<PlusIcon height="1rem" width="1rem" />}
          title="Start Campaign"
          href="/campaigns/new"
        />
      </div>
    </nav>
  );
}
