import React from 'react'
import "./homepage.css"
import Slider from '../Components/Slider/Slider'
import Navbar from '../Components/Navbar'
import SliderTwo from '../Components/Slider2/SliderTwo'
import { SliderTwoData } from '../Components/Slider2/sliderTwoData'

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
       
          <div className='lastGrid'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            
            </div> 
    </div>
  )
}

export default Homepage

