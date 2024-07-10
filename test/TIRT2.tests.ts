import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("TIRT2 Tests", function () {

  async function deployFixture() {
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const Tirt2 = await hre.ethers.getContractFactory("TIRT2");
    const tirt2 = await Tirt2.deploy();

    return { tirt2, owner, otherAccount };
  }

  it("Should have correct name", async function () {
    const { tirt2, owner, otherAccount } = await loadFixture(deployFixture);
    const name = await tirt2.name();
    expect(name).to.equal("TIRT2");
  });

  it("Should have correct symbol", async function () {
    const { tirt2, owner, otherAccount } = await loadFixture(deployFixture);
    const symbol = await tirt2.symbol();
    expect(symbol).to.equal("TIRT2");
  });

  it("Should have correct decimals", async function () {
    const { tirt2, owner, otherAccount } = await loadFixture(deployFixture);
    const decimals = await tirt2.decimals();
    expect(decimals).to.equal(0);
  });

  it("Should have correct totalSupply", async function () {
    const { tirt2, owner, otherAccount } = await loadFixture(deployFixture);
    const totalSupply = await tirt2.totalSupply();
    expect(totalSupply).to.equal(32000n);
  });

  it("Should have get balance", async function () {
    const { tirt2, owner, otherAccount } = await loadFixture(deployFixture);
    const balance = await tirt2.balanceOf(owner.address)
    expect(balance).to.equal(32000n);
  });

  it("Should transfer", async function () {
    const { tirt2, owner, otherAccount } = await loadFixture(deployFixture);
    await tirt2.transfer(otherAccount, 1n);

    const balance = await tirt2.balanceOf(otherAccount)
    expect(balance).to.equal(1n);
  });

  it("Should NOT transfer", async function () {
    const { tirt2, owner, otherAccount } = await loadFixture(deployFixture);
    const instance = tirt2.connect(otherAccount);

    //await expect(instance.transfer(owner, 1n)).to.be.revertedWith("Insufficient funds");
  });

  it("Should approve", async function () {
    const { tirt2, owner, otherAccount } = await loadFixture(deployFixture);
    await tirt2.approve(otherAccount.address, 1n);

    const value = await tirt2.allowance(owner.address, otherAccount.address);
    expect(value).to.be.equal(1n);
  });


});