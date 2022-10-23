import React from 'react'
import "./homepage.css"
import Slider from '../Components/Slider/Slider'
import Navbar from '../Components/Navbar'
import SliderTwo from '../Components/Slider2/SliderTwo'
import { SliderTwoData } from '../Components/Slider2/sliderTwoData'
import { SliderThreeData } from '../Components/Slider3/sliderThreeData'
import { SliderFourData } from '../Components/Slider4/sliderFourData'
import Footer from "../Components/Footer";
import { gridData } from './gridData'
const Homepage = () => {
  
  return (
    <div className='homePageContainer'>
      <Navbar />
      <div className='heading'><h1>Explore, collect, and sell NFTs</h1></div>
      <Slider />
     <div className='recordsCotainer'>
            <div className='tabs'>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className='records'>
              <div  className='record1 record'>
                  <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
              </div>
              <div className='record2 record'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
              </div>
            </div>
         </div> 
         <SliderTwo SliderTwoData={SliderTwoData}/>
         <SliderTwo SliderTwoData={SliderThreeData}/>
         <SliderTwo SliderTwoData={SliderFourData} />
       
          <div className='lastGrid'>
              {
                gridData.map((item,index)=>{
                  return (
                    <div key={index} className="gridItem">
                      <img src={item.image} alt="" />
                      <div><span>{item.line}</span></div>
                    </div>
                  )
                })
              }
            
            </div> 
            <Footer />
    </div>
  )
}

export default Homepage

