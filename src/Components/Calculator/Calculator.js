import React from 'react';
import '../../assets/main.css';
import './Calculator.css';
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


class Calculator extends React.Component{
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

// ReactDOM.render(
//   <Help />,
//   document.querySelector('#app')
// )

// has_beneficiary	 check to text
// goal	0.166293 field 
// is_charity	0.00442 Check to text
// visible_in_search  check 

// 50 CHAR for title
  render() {
    return (
      <div className="flex flex-row">
          <div className="calc-container flex flex-col mt-12 ml-12 mr-12 mb-40 p-8">
              <div className="container-title text-2xl font-bold">Campaign Calculator</div>
              <div className="details flex flex-col mt-4">
                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <form name="CampaignForm" required onsubmit="return validateForm()" >
                      <div className="box-label mb-2 font-bold text-lg">Title</div>
                      <textarea className="w-full" onBlur={this.validateTitle} rows="2" cols="80" id='title' maxlength='50' required />
                      <div className="note text-sm w-full mb-4">Note: You will receive a higher Optimization Score if the "Corona Virus", "charity", "death", or "job position" are mentioned).</div>
                      <div className="box-label mb-2 font-bold text-lg">Description</div>
                      <textarea className="w-full" onBlur={this.validateDesc} rows="5" cols="80" id="desc" minlength='10' required/>
                      <div className="note text-sm w-full mb-4">Note: You will recieve a higher Optimization Score if "family", "death", "outbreak", or your "work" are mentioned (We have also found that descriptions including both English and Spanish recieve higher funds as they have more potential reach).</div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="col-span-1">
                          <div className="box-label mb-2 font-bold text-lg">Goal</div>
                          <textarea className="w-full" onBlur={this.validateGoal} rows="1" cols="80" id="goal" required />
                          <div className="note text-sm w-full mb-4">Note: Most goals with charities fall around the 10,000 dollar mark.</div>
                        </div>
                        <div className="col-span-1 flex justify-center items-center">
                          <div className="grid grid-cols-4 w-full">
                            <div className="col-span-1 p-8">
                              <input className="container" name="isBene" type="checkbox" checked={this.state.isBene} onChange={this.handleInputChange} /><br />     
                              <input className="container" name="isChar" type="checkbox" checked={this.state.isChar} onChange={this.handleInputChange} /><br />
                              <input className="container" name="isVis" type="checkbox" checked={this.state.isVis} onChange={this.handleInputChange} /><br />
                            </div>
                            <div className="col-span-3 flex flex-col justify-center">
                              <p className="font-bold">Has Beneficiary</p>
                              <p className="font-bold">Is Charity</p>
                              <p className="font-bold">Visible in Search</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <input className="button" type="submit" value="Submit" /> */}
                    </form>  
                    <div className="reset-button flex justify-center items-center font-semibold" style={{marginTop: '10px', marginBottom: '15px'}} onClick={() => window.location.reload(false)}>
                      Restart
                    </div>
                    <div>If you would like to see you "predicted number of donors per day" and <br />your predicted "average donation" visit: <a className="second-calc" href="http://predictivecalculator.azurewebsites.net/">http://predictivecalculator.azurewebsites.net/</a></div>
                  </div>
                  <div className="col-span-1 flex flex-col justify-center items-center">
                    <div className="score-header text-3xl font-bold mb-4">Campaign Optimization</div>
                    <div className="calc-score mb-4">{Math.round(this.state.percentage)} %</div>
                    <div className="mb-20">
                      <ProgressBar percentage={this.state.percentage} />
                    </div>
                  </div>
                </div>
              </div>
          </div>
         
      </div>
    )
  }
}

export default Calculator;
