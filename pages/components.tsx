import React, { ReactElement } from "react";
import GlobalNotification from "../components/Notification";
import ButtonWithLoader from "../components/tailwind/ButtonWithLoader";
import InputField from "../components/tailwind/InputField";
import { sleep } from "../utils";

interface ContainerProps {
  children: React.ReactNode;
}
function Container({ children }: ContainerProps): ReactElement {
  return <div className="m-8">{children}</div>;
}

export default function Components(): ReactElement {
  const [loading, setLoading] = React.useState(false);
  //   For Input Field
  const [value, setValue] = React.useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    return null;
  };
  const handleSubmit = async () => {
    setLoading(true);
    console.log("Submitted!");
    await sleep(2000);
    setLoading(false);
  };
  return (
    <div className="flex">
      <Container>
        <ButtonWithLoader
          loading={loading}
          onSubmit={handleSubmit}
          actionText="Submit"
        />
      </Container>
      <Container>
        <GlobalNotification
          header="Message Sent"
          content="The message has been sent successfully"
          type="success"
        />
      </Container>
      <Container>
        <InputField
          placeHolder="Minimum Contribution"
          onChange={handleChange}
          value={value}
          unit="Wei"
        />
      </Container>
    </div>
  );
}
