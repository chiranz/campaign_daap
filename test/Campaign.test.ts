/* eslint-disable jest/valid-expect */
import "@nomiclabs/hardhat-ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, assert } from "chai";
import { ethers } from "hardhat";

let campaignFactory: any;
let campaignContract: any;
let campaignAddress: string;
const minimumContribution = 1000000;
let signers: SignerWithAddress[];

export function ethToWei(number: number) {
  return ethers.constants.WeiPerEther.mul(number).toString();
}
export function weiToEth(number: number) {
  return ethers.utils.formatEther(number);
}

describe("Campaign Factory", function () {
  beforeEach(async () => {
    signers = await ethers.getSigners();
    const CampaignFactory = await ethers.getContractFactory("CampaignFactory");
    campaignFactory = await CampaignFactory.deploy();
  });
  it("gives an empty list of deployed campaigns", async function () {
    await campaignFactory.deployed();
    const deployedCampaigns = await campaignFactory.getDeployedCampaigns();
    // eslint-disable-next-line jest/valid-expect
    expect(deployedCampaigns.length).to.equal(0);
  });
  it("deploys a campaign contract", async function () {
    await campaignFactory.createCampaign(minimumContribution);
    const campaignAddresses = await campaignFactory.getDeployedCampaigns();
    // eslint-disable-next-line jest/valid-expect
    expect(campaignAddresses.length).to.equal(1);
  });
});

describe("Campaign Contract", function () {
  beforeEach(async () => {
    [campaignAddress] = await campaignFactory.getDeployedCampaigns();
    campaignContract = await ethers.getContractAt(
      "CampaignContract",
      campaignAddress
    );
  });
  it("connects to a deployed Campaign Contract", async function () {
    // eslint-disable-next-line jest/valid-expect
    expect(await campaignContract.minimumContribution()).to.equal(
      minimumContribution
    );
  });
  it("marks caller as a campaign manager", async function () {
    // eslint-disable-next-line jest/valid-expect
    expect(await campaignContract.manager()).to.equal(signers[0].address);
  });
  it("allows people to contribute money and mark them as contributors", async function () {
    const contract = await ethers.getContractAt(
      "CampaignContract",
      campaignAddress,
      signers[1]
    );
    await contract.contribute({ value: minimumContribution + 1000 });
    const isContributor = await contract.contributors(signers[1].address);

    assert(isContributor);
  });
  it("requires a minimum contribution", async function () {
    try {
      await campaignContract.contribute({ value: minimumContribution - 1000 });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });
  it("allows manager to make a payment request", async () => {
    const description = "Buy Fret board";
    try {
      await campaignContract.createRequest(
        description,
        "100000",
        signers[7].address
      );
      const requestCount = await campaignContract.requestCount();
      const request = await campaignContract.requests(0);
      expect(requestCount).to.equal(1);
      expect(request[0]).to.equal(description);
    } catch (err) {
      assert(false);
    }
  });
  it("Processes a request", async () => {
    const contract = await ethers.getContractAt(
      "CampaignContract",
      campaignAddress,
      signers[1]
    );
    const balanceT1 = (await signers[7].getBalance()).div(
      ethers.constants.WeiPerEther
    );
    const etherValue = ethToWei(10);
    contract.contribute({ value: etherValue });
    await campaignContract.createRequest(
      "Some",
      ethToWei(5),
      signers[7].address
    );
    await contract.approveRequest(1);
    await campaignContract.finalizeRequest(1);
    const balanceT2 = (await signers[7].getBalance()).div(
      ethers.constants.WeiPerEther
    );
    expect(balanceT2.sub(balanceT1)).to.equal(5);
  });
  it("fails if anyone except manager tries to finalize a request", async () => {
    const contract = await ethers.getContractAt(
      "CampaignContract",
      campaignAddress,
      signers[1]
    );
    try {
      await contract.finalizeRequest(1);
      assert(false);
    } catch (err) {
      assert(true);
    }
  });
  it("fails if anyone except manager tries to create a request", async () => {
    const contract = await ethers.getContractAt(
      "CampaignContract",
      campaignAddress,
      signers[1]
    );
    try {
      await contract.createRequest(
        "Buy Fret board",
        "100000",
        signers[6].address
      );
      assert(false);
    } catch (err) {
      assert(true);
    }
  });
  it("gives contract summary", async () => {
    try {
      const summary = await campaignContract.getSummary();
      assert.ok(summary);
    } catch (err) {
      assert(false);
    }
  });
});
