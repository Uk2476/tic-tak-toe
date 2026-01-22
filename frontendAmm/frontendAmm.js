import { createWalletClient, createPublicClient, custom, formatEther, parseEther } from 'https://esm.sh/viem';
import { sepolia } from 'https://esm.sh/viem/chains';

const CONTRACT_ADDRESS = '0x4E025058672d3d2228163d8EF3d667f18a9f523C';
const STUDYPOINT_ADDRESS = '0x8445C5EaaB7F0eb478C81F721556aa5c4D37d9A3';

const AMM_ABI = [
{ "type": "constructor", "inputs": [], "stateMutability": "nonpayable" },
    {
      "type": "function",
      "name": "balanceOfCt",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "balanceOfSp",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "canteenToken",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract CanteenToken"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getOutputAmount",
      "inputs": [
        { "name": "Sptoken", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "initialToken",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "liquidityPool",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "mint",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "studyPoint",
      "inputs": [],
      "outputs": [
        { "name": "", "type": "address", "internalType": "contract StudyPoint" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "swapSpwithCt",
      "inputs": [
        {
          "name": "SpToBeSwappedWithCt",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    { "type": "error", "name": "amm_InsufficientLiquidity", "inputs": [] },
    { "type": "error", "name": "amm_insufficientBalance", "inputs": [] },
    { "type": "error", "name": "amm_onlyRecieveOnetime", "inputs": [] },
    { "type": "error", "name": "amm_transactionFAiled", "inputs": [] }
];

const ERC20_ABI = [
  {
    inputs: [
      {internalType: 'address', name: 'spender', type: 'address'},
      {internalType: 'uint256', name: 'amount', type: 'uint256'}
    ],
    name: 'approve',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    stateMutability: 'nonpayable',
    type: 'function'
  }
];

