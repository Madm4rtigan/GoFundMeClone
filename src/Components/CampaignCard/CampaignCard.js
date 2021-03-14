import { Link } from "react-router-dom"
import React from 'react';
import '../../assets/main.css';
import './CampaignCard.css';
import AppContext from '../../context.js';

export default function CampaignCard(props) {

  return (
    <Link to={`/campaign/${props.campaign_id}`} key = {props.campaign_id}>
        <div className="campaign-card flex flex-col mr-3 mb-3">
            <div className="card-top flex flex-row h-12 w-full justify-center items-center">
                <div className="likes flex mr-4 font-semibold">{props.hearts} <span aria-label = 'heart'className="ml-2" role="img" >❤️</span></div>
                <div className="shares flex mr-4 font-semibold">{props.social} <span aria-label = 'mail'className="ml-2" role="img">📤</span></div>
                <div className="score flex font-semibold">{props.donors}🤲</div>
            </div>
            <div className="campaigns-image flex w-full"><img alt = 'campaign img'src={props.image} /></div>
            <div className="campaign-details pl-4 pr-4 pt-2">
                <div className="title flex font-semibold truncate">{props.title}</div>
                <div className="category flex">Category: {props.category}</div>
            </div>
        </div>
    </Link>
  );
}


