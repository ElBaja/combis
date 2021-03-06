pragma solidity ^0.4.2;

import './zeppelin/lifecycle/Killable.sol';

contract Authentication is Killable {
  struct User {
    bytes32 name;
    bytes32 surname;
    bytes32 age;
  }
  User[] usersArray;
  mapping (address => User) private users;

  uint private id; // Stores user id temporarily

  modifier onlyExistingUser {
    // Check if user exists or terminate

    require(!(users[msg.sender].name == 0x0));
    _;
  }

  modifier onlyValidName(bytes32 name) {
    // Only valid names allowed

    require(!(name == 0x0));
    _;
  }

  function login() constant
  public
  onlyExistingUser
  returns (bytes32,bytes32) {
    return ( users[msg.sender].name , users[msg.sender].surname);
  }

  function signup(bytes32 name)
  public
  payable
  onlyValidName(name)
  returns (bytes32) {
    // Check if user exists.
    // If yes, return user name.
    // If no, check if name was sent.
    // If yes, create and return user.
    if (users[msg.sender].name == 0x0)
    {
        users[msg.sender].name = name;

        usersArray.push(users[msg.sender]);

        return (users[msg.sender].name);
    }

    return (users[msg.sender].name);
  }

  function update(bytes32 name)
  public
  payable
  onlyValidName(name)
  onlyExistingUser
  returns (bytes32) {
    // Update user name.

    if (users[msg.sender].name != 0x0)
    {
        users[msg.sender].name = name;

        return (users[msg.sender].name);
    }
  }
  function updateSurname(bytes32 surname)
  public
  payable
  onlyValidName(surname)
  onlyExistingUser
  returns (bytes32) {
    // Update user name.
    users[msg.sender].surname = surname;
    return (users[msg.sender].surname);
  }

  function updateAge(bytes32 age)
  public
  payable
  onlyValidName(age)
  onlyExistingUser
  returns (bytes32) {
    // Update user name.
    users[msg.sender].age = age;
    return (users[msg.sender].age);
  }
}
