import React from "react";
import "./homepage.css";
import Slider from "../Components/Slider/Slider";
import Navbar from "../Components/Navbar";
import SliderTwo from "../Components/Slider2/SliderTwo";
import { SliderTwoData } from "../Components/Slider2/sliderTwoData";
import { SliderThreeData } from "../Components/Slider3/sliderThreeData";
import { SliderFourData } from "../Components/Slider4/sliderFourData";
import Footer from "../Components/Footer";
import { gridData } from "./gridData";
const Homepage = () => {
  return (
    <div className="homePageContainer">
      <Navbar />
      <div className="heading">
        <h1>Explore, collect, and sell NFTs</h1>
      </div>

      <Slider />
      <div className="recordsCotainer">
        <div className="tabs">
          <div className="tab">
            <div >
              <h2>Tranding</h2>
            </div>
            <div><h2>Top</h2></div>
          </div>
          <div className="tab">
            <div>
              <select name="" id="">
                <option value="">24</option>
              </select>
            </div>
            <div>
              <button>View All</button>
            </div>
          </div>
        </div>
        <div className="tabular">
        <div >
              <div>
                <span>COLLECTION</span>
              </div>
              <div>
                <span>FLOOR PRICE</span>
              </div>
              <div>
                <span>VOLUME</span>
              </div>
            </div>
            <div >
              <div>
                <span>COLLECTION</span>
              </div>
              <div>
                <span>FLOOR PRICE</span>
              </div>
              <div>
                <span>VOLUME</span>
              </div>
            </div>
        </div>
        <div className="records">
          <div className="record1 record">
            
            <div>
              <div>
                <h3>1</h3>
                <img src="https://i.seadn.io/gcs/files/fe017de06e32766c6b9235cb5a3e14a5.gif?auto=format&w=256" alt="" />
                <span>data</span>
              </div>
              <div>
                Price
              </div>
              <div>
                Volume
              </div>
            </div>
            <div>
            <div>
                <h3>1</h3>
                <img src="https://i.seadn.io/gcs/files/fe017de06e32766c6b9235cb5a3e14a5.gif?auto=format&w=256" alt="" />
                <span>data</span>
              </div>
              <div>
                Price
              </div>
              <div>
                Volume
              </div>
            </div>
            <div>
            <div>
                <h3>1</h3>
                <img src="https://i.seadn.io/gcs/files/fe017de06e32766c6b9235cb5a3e14a5.gif?auto=format&w=256" alt="" />
                <span>data</span>
              </div>
              <div>
                Price
              </div>
              <div>
                Volume
              </div>
            </div>
            <div>
            <div>
                <h3>1</h3>
                <img src="https://i.seadn.io/gcs/files/fe017de06e32766c6b9235cb5a3e14a5.gif?auto=format&w=256" alt="" />
                <span>data</span>
              </div>
              <div>
                Price
              </div>
              <div>
                Volume
              </div>
            </div>
            <div>
            <div>
                <h3>1</h3>
                <img src="https://i.seadn.io/gcs/files/fe017de06e32766c6b9235cb5a3e14a5.gif?auto=format&w=256" alt="" />
                <span>data</span>
              </div>
              <div>
                Price
              </div>
              <div>
                Volume
              </div>
            </div>
          </div>
          <div className="record2 record">
            
          <div>
            <div>
                <h3>1</h3>
                <img src="https://i.seadn.io/gcs/files/fe017de06e32766c6b9235cb5a3e14a5.gif?auto=format&w=256" alt="" />
                <span>data</span>
              </div>
              <div>
                Price
              </div>
              <div>
                Volume
              </div>
            </div>
            <div>
            <div>
                <h3>1</h3>
                <img src="https://i.seadn.io/gcs/files/fe017de06e32766c6b9235cb5a3e14a5.gif?auto=format&w=256" alt="" />
                <span>data</span>
              </div>
              <div>
                Price
              </div>
              <div>
                Volume
              </div>
            </div>
            <div>
            <div>
                <h3>1</h3>
                <img src="https://i.seadn.io/gcs/files/fe017de06e32766c6b9235cb5a3e14a5.gif?auto=format&w=256" alt="" />
                <span>data</span>
              </div>
              <div>
                Price
              </div>
              <div>
                Volume
              </div>
            </div>
            <div>
            <div>
                <h3>1</h3>
                <img src="https://i.seadn.io/gcs/files/fe017de06e32766c6b9235cb5a3e14a5.gif?auto=format&w=256" alt="" />
                <span>data</span>
              </div>
              <div>
                Price
              </div>
              <div>
                Volume
              </div>
            </div>
            <div>
            <div>
                <h3>1</h3>
                <img src="https://i.seadn.io/gcs/files/fe017de06e32766c6b9235cb5a3e14a5.gif?auto=format&w=256" alt="" />
                <span>data</span>
              </div>
              <div>
                Price
              </div>
              <div>
                Volume
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div>
        <h2>New and notable</h2>
      </div>
      <SliderTwo SliderTwoData={SliderTwoData} />
      <div>
        <h2>Dreamers spotlight</h2>
      </div>
      <SliderTwo SliderTwoData={SliderThreeData} />
      <div className="nft">
        <div>
          <h2>NFT 101</h2>
          <span>Get comfortable with the basics.</span>
        </div>
        <div>
          <button>Learn More</button>
        </div>
      </div>
      <SliderTwo SliderTwoData={SliderFourData} />
      <div>
        <h2>Browse by category</h2>
      </div>
      <div className="lastGrid">
        {gridData.map((item, index) => {
          return (
            <div key={index} className="gridItem">
              <img src={item.image} alt="" />
              <div>
                <span>{item.line}</span>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
