import React from 'react'
import { useState } from 'react';
import "./slider.css";
import { SliderData } from './sliderData'; 
import { useEffect } from 'react';
const Slider = () => {
    const [currentSlide,setCurrentSlide] =useState(0);
    const sliderLength =SliderData.length;

    const autoScroll =true;
    let slideInterval;
    let intervalTime=5000;
  
    const nextSlide =()=>{
       
        setCurrentSlide(currentSlide===sliderLength-1? 0 : currentSlide+1 )
    }
    const prevSlide =()=>{
        setCurrentSlide(currentSlide===0?sliderLength-1:currentSlide-1)
    }

    function auto(){
        slideInterval=setInterval(nextSlide,intervalTime)
    }
    useEffect(()=>{
            setCurrentSlide(0)
    },[])
    useEffect(()=>{
        if(autoScroll){
            auto();
        }
        return ()=>clearInterval(slideInterval);
        
    },[currentSlide])
  return (
    <div className='slider'>
        <button className='button-left' onClick={prevSlide}>&lt;</button>
        <button className='button-right' onClick={nextSlide}>&gt;</button>

        {SliderData.map((item,index)=>{
          
            return (
                <div className={index === currentSlide ?"current item":"item"} key={index}>
                        {index===currentSlide && (
                            <div className='oneSlide'>
                               <div className='box'>
                               <img src={item[0].image1} alt="items" />
                                <div className="content">
                                    <p>{item[0].heading1}</p>
                                    <p>{item[0].line1}</p>
                                </div>
                               </div>
                               <div className='box'>
                               <img src={item[0].image2} alt="items" />
                                <div className="content">
                                    <p>{item[0].heading2}</p>
                                    <p>{item[0].line2}</p>
                                </div>
                               </div>
                               <div className='box'>
                               <img src={item[0].image3} alt="items" />
                                <div className="content">
                                    <p>{item[0].heading3}</p>
                                    <p>{item[0].line3}</p>
                                </div>
                               </div>
                               <div className='box'>
                               <img src={item[0].image4} alt="items" />
                                <div className="content">
                                    <p>{item[0].heading4}</p>
                                    <p>{item[0].line4}</p>
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

export default Slider