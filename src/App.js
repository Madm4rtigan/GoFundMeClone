import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React from 'react';
import Nav from './Components/Nav/Nav.js';
import FooterContainer from './Components/Footer/FooterContainer.js';
import Home from './Components/Home/Home.js';
import Campaigns from './Components/Campaigns/Campaigns.js';
// import CampaignsNew from './Components/Campaigns/CampaignsNew.js';
import Campaign from './Components/Campaign/Campaign.js';
import Calculator from './Components/Calculator/Calculator.js';
import Login from './Components/Login/Login.js';
import './Custom.css';
import './App.css';
import AppContext from './context.js'

function App() {

  const state = React.useContext(AppContext);

  return (
    <div>
      <Router>
        <div className="navbar">
          <Nav />
        </div>
        <div id="mainContent" className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campaigns" component={Campaigns} />
            <Route path="/campaign/:id" component={Campaign} />
            {/* <Route path="/calculator" component={Calculator} /> */}
            <Route path="/calculator" render={() => (
              state.isLoggedIn ? (<Calculator />) : (alert("You cannot use the calculator until you are logged in!"), (<Redirect to="/login" />))
             )} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
        <div className="footer">
          <FooterContainer />
        </div>
      </Router>
    </div>
  );
}

export default App;
