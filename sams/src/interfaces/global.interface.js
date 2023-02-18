
import { ethers } from "ethers";
import { ABI, contractAddress } from "../../constants"; 


export const getSignerContract = async() => {
    // Connect to the Ethereum provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
 // Get the first account
    const signer = provider.getSigner();
    // Define the contract ABI and address
    return { contract: new ethers.Contract(contractAddress, ABI, signer), signer};
}
