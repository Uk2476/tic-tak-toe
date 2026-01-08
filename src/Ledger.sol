//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Ledger {
    struct Account {
        string name;
        uint256 balance;
    }

    Account[] public accounts;

    mapping(string => uint256) public balances;

    function LedgerName(string memory _LedgerName) public {
        accounts.push(Account(_LedgerName, 0));
    }

    function deposit(string memory name, uint256 amount) private {
        balances[name] += amount;
    }
}
