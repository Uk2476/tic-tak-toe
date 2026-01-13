# Ledger Contract

## Contract Address - 0x3195a88E104CFCA22131002816Fa2CF85e75152a

## Setup

### Deployment steps

- wrote a contract (DeployLedger)
- Deployed to Sepolia network by using its rpc_url and verified it in etherscan and signed it by my private key.
- added private key ,sepolia rpc url and ethersca aPi key
- command used- forge script script/DeployLedger.s.sol --rpc-url $SEPOLIA_RPC_URL --broadcast --private-key $PRIVATE_KEY --verify --etherscan-api-key $ETHERSCAN_API_KEY

### Frontend Setup

- worte html and css file for interface and styling
- used javascript to interact with the contract added contact address , contractAbi(from ledger.json file)
- used js and html to connect the button in ui to interact with the contract

** A test file is also used to check the proper functionality of each function in different cases **

## Usage

- this contract can by used to keep a record of our transaction .
- u are given option to write the transaction purpose , amount and whether it is a debit or credit .
- u can also get the current balance acoording to the values input by ypu.
- it also provide an option to check transaction by its index no ( order ) and by can also write the transaction purpose to get the amount .
