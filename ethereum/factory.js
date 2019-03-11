import web3 from './web3';
//import CampaignFactory from './build/factoryCampaign.js'
import factoryCampaign from './build/factoryCampaign.js'

const instance = new web3.eth.Contract(
    JSON.parse(factoryCampaign.interface),
    '0x989127e141bC0E5572eBE8c893fEb69F62EB8286'
);

export default instance;