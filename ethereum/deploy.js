const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
//const { interface, bytecode } = require('./compile');
const compiledFactory = require('./build/factoryCampaign.json');
const INITIAL_MESSAGE = 'Welcome to Etherium!!!'
const provider = new HDWalletProvider(
    'credit negative slow machine popular lava craft appear liquid anchor shift dinosaur', 
    'https://rinkeby.infura.io/v3/cf8cc39008ed4c20968c59090f173062'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    
    console.log('attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy( { data: compiledFactory.bytecode } )
        .send( { from: accounts[0], gas: '1000000' } )

    console.log('Contract deployed to', result.options.address);
};

deploy();