const { assert } = require("chai");

const Color = artifacts.require("./Color.sol");

require("chai").use(require("chai-as-promised")).should();

contract("Color", (accounts) => {
  var contract;
  /***** Hooks *****/
  before(async () => {
    contract = await Color.deployed();
  });
  describe("deployment", async () => {
    /******* Test Cases ********/
    it("deploys successfully", async () => {
      let address = contract.address;
      //   console.log("Address :", address);
      assert.notEqual(address, "", "Address is empty");
      assert.notEqual(address, 0x0, "Zero address");
      assert.notEqual(address, null, "Address is null");
      assert.notEqual(address, undefined, "Address undefined");
    });
    it("has a name", async () => {
      let name = await contract.name();
      assert.equal(name, "Color", "Name doesn't match");
    });
    it("has a symbol", async () => {
      let symbol = await contract.symbol();
      assert.equal(symbol, "CLR", "Name doesn't match");
    });
  });

  describe("minting", async () => {
    it("creates a new token", async () => {
      const result = await contract.mint("#EC058E");
      console.log("Result", result.logs[0].args.tokenId.toNumber());
      const event = result.logs[0].args;
      assert(event[0], "0x0", "Incorrect from address");
      assert(event[1], accounts, "Incorrect to address");
      assert(event.tokenId.toNumber(), 1, "Incorrect tokenId");
    });
  });
});
