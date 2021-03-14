import React from 'react';
import './Help.scss'
import swal from 'sweetalert'; //npm install sweetalert

const ProgressBar = (props) => {
  return (
      <div className="progress-bar">
        <Filler percentage={props.percentage} />
      </div>
    )
}

const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />
}


class Help extends React.Component{
  constructor(props) {
    super(props)
    
    this.state = {
      percentage: 0,
      titleNum: 0,
      titleCorona: 0,
      titleOther:0,
      descNum: 0,
      descCorona: 0,
      descOther: 0,
      goalNum: 0,
      isBene: false,
      isChar: false,
      isVis: false,

    }
    
    this.nextStep = this.nextStep.bind(this)
    this.backStep = this.backStep.bind(this)
    this.validateTitle = this.validateTitle.bind(this)
    this.validateDesc = this.validateDesc.bind(this)
    this.validateGoal = this.validateGoal.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.thirdStep = this.thirdStep.bind(this)
    this.backThird = this.backThird.bind(this)
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    if(value === true) this.nextStep();
    if(value === false) this.backStep();

  }
   
  validateTitle() {
    let x = document.forms["CampaignForm"]["title"].value;
    let checkTitle = ['corona', 'covid', 'virus', 'outbreak'];
    let check2Title = ['charity', 'charities', 'hospital', 'job', 'death', 'dead', 'die', 'funeral', 'work', 'home', 'relief', 'aid', 'aide'];
    let xa = x.toLowerCase()
    if (xa == "") {
      swal("Please enter a valid title");
      if(this.state.titleNum === 1) {
        this.setState(prevState => ({ titleNum: 0 }))
        this.backThird();}
      return false;
    }
  
    if (checkTitle.some(v => xa.includes(v))) {
      if(this.state.titleCorona === 1) return
      this.setState(prevState => ({ titleCorona: 1 }))
      this.thirdStep();
    }
    else {
      if(this.state.titleCorona === 1) {
        this.setState(prevState => ({ titleCorona: 0 }))
        this.backThird();
      }
    }
    if (check2Title.some(v => xa.includes(v))) {
      if(this.state.titleOther === 1) return
      this.setState(prevState => ({ titleOther: 1 }))
      this.thirdStep();
    } 
    else {
      if(this.state.titleOther === 1) {
        this.setState(prevState => ({ titleOther: 0 }))
        this.backThird();
      }
    }

    if(this.state.titleNum === 1) return
    this.setState(prevState => ({ titleNum: 1 }));
    this.thirdStep();
    
  }

  validateDesc() {
    let y = document.forms["CampaignForm"]["desc"].value;
    let ya = y.toLowerCase()
    let checkDesc = ['corona', 'covid', 'virus', 'outbreak'];
    let check2Desc = ['charity', 'charities', 'hospital', 'job', 'jobless', 'death', 'dead', 'died', 'funeral', 'work', 'family', 'famili', 'brother', 'sister', 'dad', 'father', 'mom', 'mother', 'uncle', 'aunt', 'grandparent', 'grandma', 'grandmo', 'grandfa', 'grandpa'];
    if (ya == "") {
      swal("Please enter a valid desc");
      if(this.state.descNum === 1) {
        this.setState(prevState => ({ descNum: 0 }))
        this.backThird();}
      return false;
    }
    if (ya.length < 10) {
      swal("Your description needs to be longer than 10 characters")
      return false;}

    if (checkDesc.some(v => ya.includes(v))) {
      if(this.state.descCorona === 1) return
      this.setState(prevState => ({ descCorona: 1 }))
      this.thirdStep();
    }
    else {
      if(this.state.descCorona === 1) {
        this.setState(prevState => ({ descCorona: 0 }))
        this.backThird();
      }
    }

    if (check2Desc.some(v => ya.includes(v))) {
      if(this.state.descOther === 1) return
      this.setState(prevState => ({ descOther: 1 }))
      this.thirdStep();
    } 
    else {
      if(this.state.descOther === 1) {
        this.setState(prevState => ({ descOther: 0 }))
        this.backThird();
      }
    }

    if(this.state.descNum === 1) return

    this.setState(prevState => ({ descNum: 1 }))
    this.thirdStep()
    
  }
  validateGoal() {
    let z = document.forms["CampaignForm"]["goal"].value;
    if (z == "") {
     swal("Please enter a valid goal");
      if(this.state.goalNum === 1) {
        this.setState(prevState => ({ goalNum: 0 }))
        this.backStep();}
      return false;
    }
    if (z < 0) {
      swal("Please enter a valid goal");}
      if(this.state.goalNum === 1) return
      this.setState(prevState => ({ goalNum: 1 }));
      this.nextStep();
  }

  thirdStep() {
    if(this.state.percentage === 100) return
    this.setState(prevState => ({ percentage: prevState.percentage + 5.55555555556 }))
  }
  backThird() {
    if(this.state.percentage < 5.55555555556) return
    this.setState(prevState => ({ percentage: prevState.percentage - 5.55555555556 }))
  }

  nextStep() {
    if(this.state.percentage === 100) return
    this.setState(prevState => ({ percentage: prevState.percentage + 16.66666667 }))
  }

  backStep() {
    if(this.state.percentage < 16.66) return
    this.setState(prevState => ({ percentage: prevState.percentage - 16.66 }))
  }
  
 
  render() {
    return (
      <div>
        <br /><br /><br /><br />
        <h2> HelpFundMe Progression {this.state.percentage} % </h2>
        <ProgressBar percentage={this.state.percentage} />
        
        <form name="CampaignForm" required onsubmit="return validateForm()" >
          <label for="fname"></label><br />
          <textarea  onBlur={this.validateTitle} rows="2" cols="80" id='title' maxlength='50' required >Title here (note, will receive higher score if the Corona Virus and charity or death or job position are mentioned) </textarea><br />

          <textarea onBlur={this.validateDesc} rows="5" cols="80" id="desc" minlength='10' required>Description here (note, mentioning family, death, outbreak, or your work situation will recieve a higher score) (also note, we have found that descriptions including both English and Spanish recieve higher funds as they have more potential reach)</textarea><br />

          <textarea  onBlur={this.validateGoal} rows="1" cols="80" id="goal" required >Goal here (most goals with charities fall around the 10,000 dollar mark)</textarea><br />
          has_beneficiary:
          <input name="isBene" type="checkbox" checked={this.state.isBene} onChange={this.handleInputChange} /><br />     
          is_charity:
          <input name="isChar" type="checkbox" checked={this.state.isChar} onChange={this.handleInputChange} /><br />
          visible_in_search:
          <input name="isVis" type="checkbox" checked={this.state.isVis} onChange={this.handleInputChange} /><br />
          
          <label></label>
          <input type="submit" value="Submit" />
          
        </form>  
        
        <div style={{marginTop: '10px', color: 'blue', marginBottom: '15px'}} onClick={() => this.setState({ percentage: 0 })}>
          Reset
        </div>
      </div>
    )
  }  
} export default Help;



// ReactDOM.render(
//   <Help />,
//   document.querySelector('#app')
// )

// has_beneficiary	 check to text
// goal	0.166293 field 
// is_charity	0.00442 Check to text
// visible_in_search  check 

// 50 CHAR for title