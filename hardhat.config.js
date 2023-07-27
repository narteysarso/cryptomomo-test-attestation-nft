require("@nomicfoundation/hardhat-toolbox");

require("dotenv").require({path: ".env"});
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    mumbai: {
      url: process.env.PROVIDER_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_KEY
    }
  }
};
