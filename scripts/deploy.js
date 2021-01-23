const { ethers } = require('hardhat')

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log('Deploying contracts with the account:', deployer.address)

  console.log('Account balance:', (await deployer.getBalance()).toString())

  const HelloWorld = await ethers.getContractFactory('HelloWorld')
  const helloWorld = await HelloWorld.deploy()

  console.log('Contract address:', helloWorld.address)
  console.log('Waiting to be included in a block...')

  const txReceipt = await helloWorld.deployTransaction.wait()
  console.log(`Contract deployed. Used ${txReceipt.gasUsed} gas`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  })
