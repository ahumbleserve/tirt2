// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract TIRT2 is ERC20 {

    constructor() ERC20("TIRT2","TIRT2"){
        _mint(msg.sender, 32000);
    }

    function decimals() public view override returns (uint8) {
        return 0;
    }
}
