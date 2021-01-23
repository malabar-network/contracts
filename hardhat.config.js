require('@nomiclabs/hardhat-waffle')
const { HD_WALLET_MNEMONIC, INFURA_PROJECT_ID } = require('./config')

task('accounts', 'Prints the list of accounts', async () => {
  const signers = await ethers.getSigners()
  signers.forEach(async (signer) => console.log(await signer.getAddress()))
})

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: {
        // HD Wallet
        mnemonic: HD_WALLET_MNEMONIC,
      },
    },
  },
}
