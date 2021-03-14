import React, { setState } from "react";
import axios from "axios";
import AppContext from "./context";
import App from "./App";
import 'react-router-dom'

export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.actions = {
      UpdateFilters: this.UpdateFilters,
      FilterByCategory: this.FilterByCategory,
      FilterByDate: this.FilterByDate,
      OrderBySpread: this.OrderBySpread,
      OrderBySuccess: this.OrderBySuccess,
      compareValues: this.compareValues,
      CancelFilter: this.CancelFilter,
      ChangeLoginState: this.ChangeLoginState
    }
    this.state = {
      campaigns: [],
      allCampaigns: [],
      filters: {successRate:null, spread:null, date:null, Category:null,},
      isLoggedIn: false,
      whosLoggedIn: null,
    };
  }


  render() {
    return (
      <AppContext.Provider value={{ ...this.state, ...this.actions }}>
        <App />
      </AppContext.Provider>
    );
  }

  ChangeLoginState = (response, name) => {
    if(response == true) {
      this.setState({isLoggedIn: true})
      this.setState({whosLoggedIn: name})
    }
    else {
      this.setState({isLoggedIn: false})
      this.setState({whosLoggedIn: null})
    }

    console.log(this.state.whosLoggedIn)
  }

  CancelFilter = (filterName) => {
    let GroupName = null
    if(filterName.includes("Successful")) {
      GroupName = 'successRate'
    }
    else if(filterName.includes("Likes") || filterName.includes("Shares") || filterName.includes("Donors")) {
      GroupName="spread";
    }
    else if(filterName.includes("Past")) {
      GroupName="date";
    }
    else {
      GroupName="Category";
    }

    this.UpdateFilters(GroupName, null);
  }

  UpdateFilters = (GroupName, NewValue) => {
      this.state.filters[GroupName] = NewValue
      let filtered_campaigns = this.FilterByCategory(this.state.allCampaigns)
      filtered_campaigns = this.FilterByDate(filtered_campaigns)
      filtered_campaigns = this.OrderBySpread(filtered_campaigns)
      filtered_campaigns = this.OrderBySuccess(filtered_campaigns)
      this.setState({campaigns: filtered_campaigns})
  }

 
 compareValues = (key, order = 'asc') =>{
  return function innerSort(a, b) {
    if(key.includes('Likes')){
      key = "campaign_hearts"
    }
    else if (key.includes('Donors')){
      key = 'donators'
    }
    else if (key.includes('Shares')){
      key = 'social_share_total'
    }
    else if (key.includes('Successful')){
      key = 'score'
    }
    
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}
  OrderBySuccess = (campaigns) => {
    let mode = this.state.filters.successRate
    
    if (mode == null || mode == 'all')
    {
      return campaigns
    }
    let filtered = campaigns
    let asc = mode.includes('Least')
    if (asc){
      return filtered.sort(this.compareValues(mode));
    }
    else {
      return filtered.sort(this.compareValues(mode, 'desc'))
    }
  }
  OrderBySpread = (campaigns) => {
    let mode = this.state.filters.spread
    
    if (mode == null || mode == 'all')
    {
      return campaigns
    }
    let filtered = campaigns
    let asc = mode.includes('Least')
    if (asc){
      return filtered.sort(this.compareValues(mode));
    }
    else {
      return filtered.sort(this.compareValues(mode, 'desc'))
    }
  }

  FilterByDate = (campaigns) => {
    let date = this.state.filters.date
    
    let filtered = []
    if (date== null|| date == 'all' ) {
      return campaigns
    }
    else {
      if (date == "Past Day"){
        
        campaigns.forEach(c => {
          if (c.days_active <= 1)
          {
            filtered.push(c)
          }
         
          
        })
        return filtered
      }
      else if (date == "Past Week"){
        campaigns.forEach(c => {
          if (c.days_active <= 7)
          {
            filtered.push(c)
          }
          
        })
        return filtered
      }
      else if (date == "Past Month"){
        campaigns.forEach(c => {
          if (c.days_active <= 30)
          {
            filtered.push(c)
          }
        })
        return filtered
      }
      else if (date == "Past Year"){
        campaigns.forEach(c => {
          if (c.days_active <= 100)
          {
            filtered.push(c)
          }
        })
        return filtered
      }
    }
  }
  FilterByCategory = (campaigns) => {
    let mode = this.state.filters.Category
    let filtered = []
    if (!mode) {
      return this.state.allCampaigns; // all
    }
    else if (mode == 'All') {
      return this.state.allCampaigns
    }
    else {
      campaigns.forEach(c => {
        if (c.category == mode){
          filtered.push(c)
        }
      });
      return filtered
    }
  }

 
  async componentDidMount() {
    const campaigns= await axios.get("http:///api/campaign/");
    this.setState({
      campaigns: campaigns.data, 
      allCampaigns: campaigns.data
    });
    window.scrollTo(0,0)
  }
}
