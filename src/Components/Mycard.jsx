import React from 'react'
import "./myCard.css"
const Mycard = (props) => {
  return (
    <div className='mycard' >
      <img src={props.src} alt="" />
    </div>
  )
}

export default Mycard
