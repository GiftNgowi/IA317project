  // SPDX-License-Identifier: MIT
  pragma solidity ^0.8.7;

  contract samsContract {

      address public contractAdmin;

      constructor() {
          contractAdmin = msg.sender;
      }

      /*  ######## user  ########  */
      struct User {
          string username;
          string first_name;
          string last_name;
          string email;
          address userAddress;
      }
    User[] userArray;
  
      function createAccount(string memory _username, string memory _first_name, string memory _last_name, string memory _email) public {
          User memory newUser = User({
              username: _username,
              first_name: _first_name,
              last_name: _last_name,
              email: _email,
              userAddress: msg.sender
          });
  
          userArray.push(newUser);
      }

  
      // function to return any available user from the user a ( CHECKING IF THE USER EXISTS AND RETURN THEM)
      function userCheck() public view returns (User memory) {
          User memory foundUser;
          for (uint256 i; i < userArray.length; i++) {
              if (userArray[i].userAddress == msg.sender) {
                  foundUser = userArray[i];
              }
          }
          return foundUser;
      }
  
      // returns the boolean value for the available user (using ther  /* userChecker function*/)
      function loginUser() public view returns (bool) {
          bool result;
          User memory user = userCheck(); // getting the user from the return type of the userChecker function
          if (
              keccak256(bytes(user.username)) != keccak256(bytes(""))
          ) // comparing the string literals in solidity
          {
              result = true;
          } else {
              result = false;
          }
          return result;
      }

      function isAdmin() public view returns(bool) {
          if (contractAdmin == msg.sender) return true;
          return false;
      }
  
  function sendMessageToAccepted(string memory message) public {
for (uint256 i = 0; i < userArray.length; i++) {
if (userArray[i].isAccepted) {
// send message to the user's address
}
}
}

function sendMessageToNonAccepted(string memory message) public {
for (uint256 i = 0; i < userArray.length; i++) {
if (!userArray[i].isAccepted) {
// send message to the user's address
}
}
}
/* password change */
function changePassword(bytes32 _email, bytes32 _newPassword) public {
    require(
    msg.sender == adminAddress ||
    msg.sender == users[_email].userAddress,
    "Unauthorized access"
    );
    users[_email].password = keccak256(abi.encodePacked(_newPassword));
    }
    }
 
  
     
  
  