import React, { ReactElement } from "react";
import ButtonWithLoader from "./tailwind/ButtonWithLoader";
import InputField from "./tailwind/InputField";

export default function CreateCampaign(): ReactElement {
  const [minimumAmount, setMinimumAmount] = React.useState(0);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMinimumAmount(parseInt(e.currentTarget.value));
    return null;
  };
  return (
    <div>
      <h1>Start New Campaign</h1>

      <InputField
        onChange={handleChange}
        value={minimumAmount}
        placeHolder="Minimum Contribution"
        unit="wei"
      />
      <ButtonWithLoader actionText="Create" onSubmit={() => {}} />
    </div>
  );
}
