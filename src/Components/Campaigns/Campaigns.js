import React from 'react';
import '../../assets/main.css';
import './Campaigns.css';
import AppContext from '../../context.js'
import CampaignCard from '../CampaignCard/CampaignCard.js';
import whiteX from '../../assets/icons/whiteX.png';

function Campaigns() {
    const SuccessRate = [
        'Most Successful',
        'Least Successful',
    ];
    const spread = [
        'Most Likes',
        'Most Shares',
        'Most Donors',
        'Least Likes',
        'Least Shares',
        'Least Donors'
    ]
    const dates = [
        'Past Day',
        'Past Week',
        'Past Month',
        'Past Year'       
    ];
    const state = React.useContext(AppContext)
    let filtered_campaigns = state.campaigns
    let categories =  [];
    state.allCampaigns.forEach((campaign) => {
        let curr_category = campaign.category
        if (!categories.hasOwnProperty(curr_category))  {
            categories[curr_category] = 1
        } 
        else {
            categories[curr_category] += 1
        }
    });

    let selected_filters = []
    Object.values(state.filters).map((filter) => {
        if(filter != null && filter != "All") {
            selected_filters.push(filter);
        }
    }); 

    

  return (
    <div className="grid grid-cols-5 w-full">

        {/***************************** Left Side *****************/}
        <div className="col-span-1 pl-8 pt-8">
            <div className="filter-container p-8 mb-8">
                <div className="text-xl font-semibold"></div>
                <div className="criteria flex flex-col mt-6 font-semibold">
                    <p className="mb-2">Success Rate</p>
                    {Object.entries(SuccessRate).map(([c, i]) => (
                    <div onClick = {() => {  state.UpdateFilters("successRate", i)} } key = {i}>
                        <div className="filter-item mb-2 ml-2 font-normal" key = {i}>
                            {i}
                        </div>
                    </div>
                    ))}
                    <p className="mb-2">Spread</p>
                    {Object.entries(spread).map(([c, i]) => (
                    <div onClick = {() => {  state.UpdateFilters("spread", i)} } key = {i}>
                        <div className="filter-item mb-2 ml-2 font-normal" key = {i}>   
                            {i}
                        </div>
                    </div>
                    ))}
                    <p className="mb-2">Date</p>
                    {Object.entries(dates).map(([c, i]) => (
                    <div onClick = {() => {  state.UpdateFilters("date", i)} } key = {i}>
                        <div className="filter-item mb-2 ml-2 font-normal" key = {i}>
                            {i}
                        </div>
                    </div>
                    ))}
                    <p className="mb-2">Categories</p>
                    <div className="filter-item mb-2 ml-2 font-normal" onClick = {() => {  state.UpdateFilters("Category", "All")} } >All</div>
                    {Object.entries(categories).map(([c, i]) => (
                    <div onClick = {() => {  state.UpdateFilters("Category", c)} } key = {i}>
                        <div className="filter-item mb-2 ml-2 font-normal" key = {i}>
                            {c} ({i})
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>

        {/* -------------------{middle}--------------------------------- */}
        <div className="col-span-4 right-container p-8">
           <div className="campaigns-header grid grid-cols-8 gap-2 mb-8 p-8">
                <div className="col-span-1 text-xl font-semibold">Campaigns</div>     
                <div className="col-span-7 filter-data flex flex-row flex-wrap">
                        {Object.entries(selected_filters).map(([count, filter]) => (
                        <div onClick={() => { state.CancelFilter(filter) }} className="filter-pill h-6 flex flex-row mr-2 mt-1 items-center text-sm" key = {filter}>
                            <div className="filter-name font-semibold">{filter}</div>
                            <div className="delete-filter ml-2 font-bold"><img alt = 'whiteX'className="w-2" src={whiteX} /></div>
                        </div>
                     ))}
                </div>
           </div>
           <div className="content-container flex flex-row flex-wrap mb-8 w-full">
                {Object.entries(filtered_campaigns).map(([count, campaign]) => (
                    <CampaignCard key={count} campaign_id={campaign.campaign_id} hearts={campaign.campaign_hearts} social={campaign.social_share_total}
                                  image={campaign.campaign_image_url} title={campaign.title} category={campaign.category} donors={campaign.donators}/>
                ))}
            </div>
        </div>
    </div>
  );
}
export default Campaigns;
