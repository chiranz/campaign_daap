import CampaignFactory from "../src/artifacts/contracts/CampaignContract.sol/CampaignFactory.json";
import CampaignContract from "../src/artifacts/contracts/CampaignContract.sol/CampaignContract.json";
import { ethers } from "ethers";

export const campaignFactoryDetails = {
  address: "0xd2f5f143A9A45886B43dE7cAcE5122DC8d2b0436",
  abi: CampaignFactory.abi,
};

export const campaignContractABI = CampaignContract.abi;

export const getProvider = async () => {
  let provider: any;
  if (
    typeof window !== "undefined" &&
    typeof (window as any).ethereum !== "undefined"
  ) {
    console.log(process.env.INFURA_API);
    provider = new ethers.providers.Web3Provider((window as any).ethereum);
  } else {
    provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_API);
  }
  return provider;
};
// export const getCampaignFactory = async () => {
//   const provider = new ethers.providers.Web3Provider(ethereum);
//   const contract = new ethers.Contract(
//     CONTRACT_ADDRESS,
//     CampaignFactory.abi,
//     provider
//   );
//   return contract;
// };

// export const getCampaignContract = async () => {
//   const provider = new ethers.providers.Web3Provider(ethereum);
//   const contract = new ethers.Contract(address, CampaignContract.abi, provider);
//   return contract;
// };

// //

export const getProviderAddress = async () => {
  const provider = await getProvider();
  console.log(provider);
};
