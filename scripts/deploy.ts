import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
// import fs from "fs"
// import path from "path"

async function main() {
  // We get the contract to deploy
  const CampaignFactory = await ethers.getContractFactory("CampaignFactory");
  const campaignFactory = await CampaignFactory.deploy();
  // Campaign Contract
  await campaignFactory.deployed();
  console.log("Campaign Factory deployed to:", campaignFactory.address);
}

// const contractAddressPath = path.resolve(__dirname, "contractAddress.json")

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
