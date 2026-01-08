//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Ledger {
    uint256 accountBalance;
    uint256 transactionCount;

    struct Transaction {
        string name;
        uint256 amount;
    }

    Transaction[] public transactions;

    mapping(string => uint256) public balances;

    function Debit(string memory transactionPurpose, uint debitAmount) public {
        transactions.push(Transaction(transactionPurpose, debitAmount));
        accountBalance -= debitAmount;
        transactionCount++;
    }

    function Credit(
        string memory transactionPurpose,
        uint256 creditAmount
    ) public {
        transactions.push(Transaction(transactionPurpose, creditAmount));
        accountBalance += creditAmount;
        transactionCount++;
    }

    function getBalance() public view returns (uint256) {
        return accountBalance;
    }

    function getTransactionDetails(
        uint256 index
    ) public view returns (string memory, uint256) {
        require(index < transactionCount, "Invalid transaction index");
        Transaction memory txn = transactions[index];
        return (txn.name, txn.amount);
    }
}
