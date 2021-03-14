import React from "react";
import axios from "axios";
import AppContext from "../../context";
import CampaignCard from '../CampaignCard/CampaignCard.js'


/** The context provider for our app */
export default class CampaignsNew extends React.Component {
  constructor(props) {
    super(props);
    
    this.actions = {}
    this.state = {
      campaigns: [],
      filters: { successRate:null, spread:null, date:null, category:null},
      //cat egories: []  
    };
  }

//   getContext() {
//     const context = React.useContext(AppContext)
//     return context;
//   }
  render() {
    //const context = React.useContext(AppContext)
    return (
      
      <div className="content-container flex flex-row flex-wrap mb-8 w-full">

      {Object.entries(this.state.campaigns).map(([count, campaign]) => (
          <CampaignCard key={count} campaign_id={campaign.campaign_id} hearts={campaign.campaign_hearts} social={campaign.social_share_total}
                          image={campaign.campaign_image_url} title={campaign.title} category={campaign.category}/>
      ))}
  </div>
    );
  }

  async componentDidMount() {
    const campaigns= await axios.get("http://localhost:8000/api/campaign/");
    //const categories = await axios.get("http://localhost:8000/api/category/");
    this.setState({
      campaigns: campaigns.data, 
      //categories: categories.data
    });
    window.scrollTo(0,0)
}


}


























