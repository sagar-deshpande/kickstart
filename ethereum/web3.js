import Web3 from 'web3';
//const web3 = new Web3(window.web3.currentProvider);

let web3;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {

    // we are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
}else {
    //we are on the browser or user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/cf8cc39008ed4c20968c59090f173062'
    );

    web3 = new Web3(provider);
}
export default web3;