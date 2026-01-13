const contractAddress = '0x49ab07f1DE7Be3cA75ea3ceD0A6bA08b47C17189';

const contractAbi = [
    {
      "type": "function",
      "name": "Credit",
      "inputs": [
        {
          "name": "transactionPurpose",
          "type": "string",
          "internalType": "string"
        },
        { "name": "creditAmount", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "Debit",
      "inputs": [
        {
          "name": "transactionPurpose",
          "type": "string",
          "internalType": "string"
        },
        { "name": "debitAmount", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getBalance",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getTransactionAmountByPurpose",
      "inputs": [
        {
          "name": "transactionPurpose",
          "type": "string",
          "internalType": "string"
        }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getTransactionDetails",
      "inputs": [
        { "name": "index", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "", "type": "string", "internalType": "string" },
        { "name": "", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "event",
      "name": "CreditAdded",
      "inputs": [
        {
          "name": "purpose",
          "type": "string",
          "indexed": false,
          "internalType": "string"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "newBalance",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "DebitAdded",
      "inputs": [
        {
          "name": "purpose",
          "type": "string",
          "indexed": false,
          "internalType": "string"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "newBalance",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    }
];

