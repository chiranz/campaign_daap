export const getEtherScanUrl = (address: string) => {
  return `https://etherscan.io/address/${address}`;
};

export const joinClasses = (...classes) => {
  return classes.join(" ");
};

export const sleep = async (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
