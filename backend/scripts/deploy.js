//deploy script
//imports
const { ethers } = require("hardhat")

//async main function
async function main() {
   const samsContractFactory = await ethers.getContractFactory(
    "samsContract"
    )
    console.log("Deploying contract...")
    const SamsContract = await samsContractFactory.deploy()
    await SamsContract.deployed()
    /*what's the private key?
    what's the rpc url? (we did'nt define the blockchain we're going to deploy to) */
    console.log(`Deployed contract to: ${SamsContract.address}`)
    /*what happens when we deploy to our hardhat network?
    checking to see if the network we're running on is a live net, test net
    or a network that can be actually verified 
    console.log(network.config)  */

    //starting to interact with our contract
    const currentValue = await SamsContract.loginUser()
    console.log(`Current value is: ${currentValue}`)
        
   }
//call the main function
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});  