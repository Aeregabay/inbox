const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'stock tuition hour call half pizza strategy hazard wife emerge attend message',
    'https://rinkeby.infura.io/v3/8b4f21a4065547e8921082a3a359ef02'
);
const web3 = new Web3(provider);

const deploy = async () => {
    // Get a list of all accounts
    const accounts = await web3.eth.getAccounts();

    // Use one account to deploy the contract
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi there!']})
        .send({from: accounts[0], gas: '1000000'});

    console.log('Contract deployed to ', result.options.address);
};
deploy().catch((err) => {
    console.log(err);
});