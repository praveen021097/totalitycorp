import React from 'react'
import Mycard from './Mycard'
import "./imageCrousel.css"

const ImageCrousel = () => {
    let box = document.querySelector(".product-container");
    let i=0
    setInterval(()=>{
        
       if(i==3){
           i=0 
       }else{
        let width =box.clientWidth;
        box.scrollLeft=box.scrollLeft+Math.floor(width);
        console.log(width)
       }
    },5000)

    const btnPrev =()=>{
        let width =box.clientWidth;;
        box.scrollLeft=box.scrollLeft-Math.floor(width/4);
        console.log(width)
    }
    const btnNext=()=>{
        let width =box.clientWidth;;
        box.scrollLeft=box.scrollLeft+Math.floor(width/4);
        console.log(width)
    }
  return (
    <div className='productCrousel'>
            <button className='prev' onClick={btnPrev}>&lt;</button>
            <button className='next' onClick={btnNext}>&gt;</button>

            <div className='product-container'>
                    <Mycard pathh="../images/badLady.png" />
                    <Mycard pathh="../images/badLady.png" />
                    <Mycard pathh="../images/badLady.png" />
                    <Mycard pathh="../images/badLady.png" />
                    <Mycard pathh="../images/badLady.png" />
                    <Mycard pathh="../images/badLady.png"/>
                    <Mycard pathh="../images/badLady.png"/>
                    <Mycard pathh="../images/badLady.png"/>
                    <Mycard pathh="../images/badLady.png" />
                    <Mycard pathh="../images/badLady.png" />
                    <Mycard pathh="../images/badLady.png" />
                    <Mycard pathh="../images/badLady.png" />
            </div>
    </div>
  )
}

export default ImageCrousel
