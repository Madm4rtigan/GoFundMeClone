import React from "react";
import '../../assets/main.css';
import './Home.css';
import card1 from '../../assets/images/covid-19.png';
import card2 from '../../assets/images/covid-19stress.png';
import card3 from '../../assets/images/covid-19global.png';



function Home(props) {
  return (
    <div className="home-page mb-40 w-screen">
      <div className="grid grid-rows-4 w-screen">
        <div className="row-span-2">
          <div className="background-image h-full w-screen" alt="background-image">
            <div className="grid grid-rows-6 h-full w-full">
              <div className="top-row row-span-1">
              </div>
              <div className="mid-row row-span-5 flex justify-center pt-12">
                <div className="home-panel w-64 shadow-xl mr-12 mt-12 flex flex-col items-center">
                  <img className="card-image w-12 h-12 mt-8" src={card1} />
                  <p className="mt-4 font-bold">Optimize Your Compaign</p>
                  <p className="mt-4 font-normal mr-8 ml-8 text-center">We are here to help you best optimize your campaign so that you can raise as much money possible.</p>
                </div>
                <div className="home-panel w-64 shadow-xl mr-12 mt-12 flex flex-col items-center">
                  <img className="card-image w-12 h-12 mt-8" src={card2} />
                  <p className="mt-4 font-bold">Save Yourself From Stress</p>
                  <p className="mt-4 font-normal mr-8 ml-8 text-center">Times are not easy. Covidata helps you find solutions to your problems quickly to save you from stress.</p>
                </div>
                <div className="home-panel w-64 shadow-xl mr-12 mt-12 flex flex-col items-center">
                  <img className="card-image w-12 h-12 mt-8" src={card3} />
                  <p className="mt-4 font-bold">A Global Effort</p>
                  <p className="mt-4 font-normal mr-8 ml-8 text-center">By optimizing your campaign you could have a greater effect on a global scale. Covidata will make you powerful!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-2 pt-4 flex justify-center">
          <div className="video w-1/2 ml-12 mr-20">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TSLFDEodAII" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Home;
