import React, { useEffect, useState } from 'react'

import "./SliderTwo.css";


const SliderTwo = ({SliderTwoData}) => {
    const [currentSlideTwo,setCurrentSlideTwo] =useState(0)
    const sliderLength2 =SliderTwoData.length;

    const autoScroll2 =true;
    let slideInterval2;
    let intervalTime2=5000;
    console.log(currentSlideTwo,sliderLength2)
    const nextSlide2 =()=>{
        console.log("nextButton")
        setCurrentSlideTwo(currentSlideTwo==sliderLength2-1? 0 : currentSlideTwo+1 )
    }
    const prevSlide2 =()=>{
        console.log("prevButton")
        setCurrentSlideTwo(currentSlideTwo==0?sliderLength2-1:currentSlideTwo-1)
    }

    function auto2(){
        slideInterval2=setInterval(nextSlide2,intervalTime2)
    }
    useEffect(()=>{
            setCurrentSlideTwo(0)
    },[])
    useEffect(()=>{
        if(autoScroll2){
            auto2();
        }
        return ()=>clearInterval(slideInterval2);
        
    },[currentSlideTwo])
  return (
    <div className='slider'>
        <button className='button-left' onClick={nextSlide2}>&lt;</button>
        <button className='button-right' onClick={prevSlide2}>&gt;</button>

        {SliderTwoData.map((item,index)=>{
           
            return (
                <div className={index === currentSlideTwo ?"current item":"item"} key={index}>
                        {index===currentSlideTwo && (
                            <div className='oneSlide'>
                               <div className='box2'>
                               <img src={item[0].image1} alt="items" />
                                <div className="content2">
                                    <img src={item[0].miniImage1} alt="" />
                                    <span>{item[0].quote1}</span>
                                </div>
                               </div>
                               <div className='box2'>
                               <img src={item[0].image2} alt="items" />
                                <div className="content2">
                                <img src={item[0].miniImage2} alt="" />
                                <span>{item[0].quote2}</span>
                                </div>
                               </div>
                               <div className='box2'>
                               <img src={item[0].image3} alt="items" />
                                <div className="content2">
                                <img src={item[0].miniImage3} alt="" />
                                <span>{item[0].quote3}</span>
                                </div>
                               </div>
                              
                            </div>
                            
                        )}
                </div>
            )
        })}
    </div>
  )
}

export default SliderTwo