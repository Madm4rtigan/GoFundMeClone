import React, { Component } from 'react';
import './Login.css';
 
class App extends Component {
 
    componentDidMount() {
        this.googleSDK();
        console.log('sfsfd');
    }
 
    prepareLoginButton = () => {
 
    console.log(this.refs.googleLoginBtn);
 
    this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
        (googleUser) => {
 
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE
 
 
        }, (error) => {
            alert(JSON.stringify(error, undefined, 2));
        });
 
    }
 
    googleSDK = () => {
 
        window['googleSDKLoaded'] = () => {
          window['gapi'].load('auth2', () => {
            this.auth2 = window['gapi'].auth2.init({
              client_id: '859450049001-apd5f0kr32h83sgkf3ckpqp9er9hm35s.apps.googleusercontent.com',
              cookiepolicy: 'single_host_origin',
              scope: 'profile email'
            });
            this.prepareLoginButton();
          });
        }
     
        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
     
    }
   
    render() {
 
        return (
            <div className="row mt-5">  
                <div className="col-md-12">
                    <h2 className="text-left">Google Login Demo</h2>
                    <div className="card mt-3">
                        <div className="card-body">
                             
                            <div className="row mt-5 mb-5">
                                <div className="col-md-4 mt-2 m-auto ">
                                    <button className="loginBtn loginBtn--google" ref="googleLoginBtn">
                                        Login with Google
                                    </button>
                                </div>    
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default App;


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login';
// import './Login.css';
// import AppContext from '../../context.js';



// function Login(props) {

// const state = React.useContext(AppContext);

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [url, setUrl] = useState("");
// const [message, setMessage] = useState("");

// // const responseGoogle = response => {
// //     setName(response.profileObj.name);
// //     setEmail(response.profileObj.email);
// //     setUrl(response.profileObj.imageUrl);
// //     setMessage("successfully logged in!");
// //     state.ChangeLoginState(true, response.profileObj.name);
// // }

// componentDidMount = () => {
//     this.googleSDK();
//     console.log('sfsfd');
// }

// prepareLoginButton = () => {

// console.log(this.refs.googleLoginBtn);

// this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
//     (googleUser) => {

//     let profile = googleUser.getBasicProfile();
//     console.log('Token || ' + googleUser.getAuthResponse().id_token);
//     console.log('ID: ' + profile.getId());
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail());
//     //YOUR CODE HERE


//     }, (error) => {
//         alert(JSON.stringify(error, undefined, 2));
//     });

// }

// googleSDK = () => {
 
//     window['googleSDKLoaded'] = () => {
//       window['gapi'].load('auth2', () => {
//         this.auth2 = window['gapi'].auth2.init({
//           client_id: '859450049001-apd5f0kr32h83sgkf3ckpqp9er9hm35s.apps.googleusercontent.com',
//           cookiepolicy: 'single_host_origin',
//           scope: 'profile email'
//         });
//         this.prepareLoginButton();
//       });
//     }
   
//     (function(d, s, id){
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) {return;}
//       js = d.createElement(s); js.id = id;
//       js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'google-jssdk'));
   
// }


//     return(
//         <div className="flex flex-row justify-center items-center">
//             <div className="login-container w-64 flex flex-col justify-center items-center mt-12 shadow-xl p-8">
//                 <div className="text-3xl font-bold">Login with Google</div>
//                 <p className="text-center pt-8 pb-8">In order to ensure the protection of your campaign data, it is important that you verify 
//                    your identity. Login with google to quickly get started customizing your campaign.</p>
//                    <button className="loginBtn loginBtn--google" ref="googleLoginBtn">
//                         Login with Google
//                     </button>
                
//                 {/* <GoogleLogin
//                     // clientId="859450049001-m347847o27cihl3s725egijljogik5ro.apps.googleusercontent.com"
//                     clientId="859450049001-apd5f0kr32h83sgkf3ckpqp9er9hm35s.apps.googleusercontent.com"
//                     buttonText="Login to Covidata"
//                     onSuccess={responseGoogle}
//                     onFailure={responseGoogle}
//                     cookiePolicy={'single_host_origin'}
//                     isSignedIn={true}
//                 /> */}
//                 <div className="mb-4 mt-8 text-lg font-semibold">{name} {message}</div>
//                 <img className="w-32 h-auto" src={url} alt={name}/>
//             </div>
//         </div>
//     );
// }

 
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Login />, rootElement);

// export default Login;

