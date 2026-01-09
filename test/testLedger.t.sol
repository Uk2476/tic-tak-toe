//SPDX_License-Identifier: MIT
pragma solidity ^0.8.19;

import {Test} from "forge-std/Test.sol";
import {Ledger} from "../src/Ledger.sol";

contract LedgerTest is Test {
    Ledger private ledger;
    address private owner = msg.sender;
    address private nonOwner = address(0x123);

    function setUp() public {
        ledger = new Ledger();
    }

    function testCreditByOwner() public {
        ledger.Credit("Initial Deposit", 1000);
        uint256 balance = ledger.getBalance();
        assertEq(balance, 1000);
    }

    function testDebitByOwner() public {
        ledger.Credit("Initial Deposit", 1000);
        ledger.Debit("Bill Payment", 300);
        uint256 balance = ledger.getBalance();
        assertEq(balance, 700);
    }

    function testTransactionDetailsByOwner() public {
        ledger.Credit("Initial Deposit", 1000);
        ledger.Debit("Bill Payment", 300);
        (string memory name, uint256 amount) = ledger.getTransactionDetails(1);
        assertEq(name, "Initial Deposit");
        assertEq(amount, 1000);
        (name, amount) = ledger.getTransactionDetails(2);
        assertEq(name, "Bill Payment");
        assertEq(amount, 300);
    }

    function testCreditByNonOwner() public {
        vm.prank(nonOwner);
        vm.expectRevert("Not authorized");
        ledger.Credit("Initial Deposit", 1000);
    }

    function testDebitByNonOwner() public {
        vm.prank(nonOwner);
        vm.expectRevert("Not authorized");
        ledger.Debit("Bill Payment", 300);
    }

    function testGetBalanceByNonOwner() public {
        vm.prank(nonOwner);
        vm.expectRevert("Not authorized");
        ledger.getBalance();
    }

    function testInitialBalance() public {
        uint256 amount = ledger.getBalance();
        assertEq(amount, 0);
    }
}
