import React, { ReactElement } from "react";
import { NextRouter } from "next/router";
import { useRouter } from "next/router";
interface RouterProps extends NextRouter {
  query: {
    currencyCode?: string;
  };
}

export default function CurrencyCode(): ReactElement {
  const router = useRouter();
  const {
    query: { currencyCode },
  }: RouterProps = router;
  return <DetailsPage currency={currencyCode} />;
}

type DetailsProps = {
  children?: React.ReactNode;
  currency: string;
};
export function DetailsPage({
  children,
  currency,
}: DetailsProps): ReactElement {
  return (
    <div>
      <h2>This is {currency}</h2>

      {children}
    </div>
  );
}
