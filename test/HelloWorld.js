const { expect } = require("chai");

describe("HelloWorld contract", function () {
  it(`should return "Hello" when sayHello() is called`, async function () {
    const [owner] = await ethers.getSigners();

    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    const helloWorld = await HelloWorld.deploy();

    expect(await helloWorld.sayHello()).to.equal("Hello");
  });
});
