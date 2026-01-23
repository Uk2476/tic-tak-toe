//SPDX-License-Identifier :MIT

pragma solidity ^0.8.18;

import "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract tokenA is ERC20 {

    constructor(uint256 initialsupply) ERC20("Trenbolone", "TRN") {
        _mint(msg.sender , initialsupply);
    }

     function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
