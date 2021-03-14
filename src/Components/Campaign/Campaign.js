import React from 'react';
import '../../assets/main.css';
import './Campaign.css';
import AppContext from '../../context.js';



export default function Campaign(props) {
  const state = React.useContext(AppContext)
  const campaignid = props.match.params.id;
  let campaign = {}
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  state.campaigns.forEach((c, index) => {
    if (c.campaign_id === parseInt(campaignid))
    {
      campaign = c
    }
  })

  let percent = Math.round(((campaign.current_amount / campaign.goal) * 100))
  if (percent >= 100) 
  {
    percent = 100
  }

  let score = 0
  if (campaign.score >= 1000) {
    score = 100;
  }
  else if (campaign.score == 0) {
    score = 0;
  }
  else {
    score = (campaign.score / 10).toFixed(1);
  }

  return (
    <div className="grid grid-rows-2 gap-4 flex justify-center pl-8 pr-8">
      <div className="row-span-1 flex flex-row justify-center items-center mt-8"> 
        <div className="flex flex-col items-center mr-12">
          <div className="campaign-title text-lg text-4xl font-black mb-4 text-center">{campaign.title}</div>
          <div className="campaign-image flex w-full mb-8"><img alt = 'campaign img'src={campaign.campaign_image_url} /></div>
        </div>
        <div className="details-panel grid grid-rows-5 shadow-lg">
          <div className="row-span-1 flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <div className="mr-12"><span className="font-bold">Created by:</span>&emsp;{campaign.user_first_name}</div>
              <div><span className="font-bold">Days Active:</span>&emsp;{campaign.days_active} </div>
            </div>
            <div className="flex flex-row">
              <div className="mr-12"><span className="font-bold">Location:</span>&emsp;{campaign.location_city} {campaign.location}</div>
              <div><span className="font-bold">Category:</span>&emsp;{campaign.category}</div>
            </div>    
          </div>
          <div className="row-span-3">
            <div className="grid grid-cols-2 h-full p-4">
              <div className="col-span-1 h-full details-container flex flex-col pl-8 pr-8">
                <div className="flex flex-row justify-center h-full items-center">
                  <div className="grid grid-rows-2 h-full">
                    <div className="row-span-1 flex flex-row justify-center">
                      <div className="flex flex-col items-center justify-center p-2 mr-3">
                        <div className="font-bold">Donors</div> 
                        <div className="font-bold">{campaign.donators}</div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2 mr-3">
                        <div className="font-bold">Likes</div>
                        <div className="font-bold">{campaign.campaign_hearts}<span aria-label='heart' role="img" > ❤️</span></div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2">
                        <div className="font-bold">Shares</div> 
                        <div className="font-bold">{campaign.social_share_total}<span aria-label='mail' role="img"> 📤</span> </div>
                      </div>
                    </div>
                    <div className="row-span-1 flex flex-row justify-center">
                      <div className="flex flex-col items-center justify-center p-2 mr-3">
                        <div className="font-bold">DPD</div> 
                        <div className="font-bold">{Math.round(campaign.donatorsPerDay * 10) / 10}</div>
                      </div> 
                      <div className="flex flex-col items-center justify-center p-2 mr-3">
                        <div className="font-bold">LPD</div> 
                        <div className="font-bold">{Math.round(campaign.heartsPerDay * 10) / 10}</div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2">
                        <div className="font-bold">SPD</div> 
                        <div className="font-bold">{Math.round(campaign.sharePerDay * 10) / 10}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 rating-container flex flex-col justify-center items-center p-8 h-full">
                <p className="rating-label text-xl font-black text-center">Score:</p>
                <div className="flex flex-row items-center">
                  <div className="rating">{score}%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="funding-container row-span-1 flex flex-col items-center pl-8 pr-8 pt-4 pb-4">
            <p className="font-bold text-xl mb-2">${campaign.current_amount} raised of ${campaign.goal} goal </p>
            <div className="funding-bar w-full">
              <div className="filler text-xs leading-none py-1 text-center text-white font-bold" style={{ width: `${percent}%`  }}>{percent}%</div>
            </div> 
          </div>
        </div>
        
      </div>
      <div className="row-span-1 flex justify-center mt-8">
        <div className="description">
            &emsp; {campaign.description}
        </div>
      </div>
    </div>
    );
    
}


