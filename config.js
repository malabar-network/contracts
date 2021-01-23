const dotenv = require('dotenv')

// Load the .env file
dotenv.config()

function get(key, defaultVal) {
  const val = process.env[key] || defaultVal

  if (!val) {
    throw new Error(`Expected environment variable ${key}`)
  }

  return val
}

module.exports.HD_WALLET_MNEMONIC = get('HD_WALLET_MNEMONIC')
module.exports.INFURA_PROJECT_ID = get('INFURA_PROJECT_ID')
