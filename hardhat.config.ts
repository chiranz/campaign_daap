import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import { HardhatUserConfig } from "hardhat/types";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.3", settings: {} }],
  },
  paths: { artifacts: "./src/artifacts" },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/18c57b36265d40f89f18ef3a90865d07",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};

export default config;
