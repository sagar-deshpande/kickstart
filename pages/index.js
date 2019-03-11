import React, { component} from 'react'
import factory from '../ethereum/factory'

class CampaignIndex extends Component {
    async componentDidMount() {
        const campaigns = await factory.methods.getDeployedCampaign.call();
        console.log(campaigns);
    }

    render() {
        return <div>Campaign Index</div>
    }
}

export default CampaignIndex;