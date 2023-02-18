require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  /*by default whenever we run a script or deploy a smart contract without specifying a network
  it automatically uses this fake network
   defaultNetwork: "hardhat"
   it comes automatically with the |rpc url && private key| for you
   */
  //  defaultNetwork: "hardhat",
  solidity: "0.8.7",

  /* :{
   since it is not a default network you have to tell |hardhat|
  exactly how we're going to connect to this network
    rinkeby: {
    }, */
  networks: {
    development: {
      url: "http://localhost:8545",
      port: 8545,
    },
  },

  namedAccounts: {
    deployer: {
      default: 0, // this will by default take the first account as deployer
      1: 0 /* similarly on mainnet it will take the first account as deployer.
         Note that it depends on how hardhat network is configured, the account 0 on one network can be different than on another */,
    },
  },
};
