import React, { useState } from 'react'
import "./navbar.css"
import opensea from "./../images/openseafull.png"
import { MdSearch } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    const [onfill,setOnFill] =useState(false)
    const handleChange=(e)=>{
        if(e.target.value){
            setOnFill(true)
        }
        else{
            setOnFill(false)
        }
    }
  
  return (
    <div className="navbar">
      <div className='logoSection'>
        <img src={opensea} alt="logo not loaded"/>
      </div>
      <div className='searchSection'>
               <MdSearch size={"27px"} color={"#8b949c"} />
               <input type="text" onKeyUp={handleChange}  placeholder={onfill?"":'Search items,collections,and accounts'}/>
      </div>
      <div className='menuTabs'>
        <ul>
            <li>
                <a href="#">Explore</a>
               <div className='dropDown'>
               <ul >
                    <li><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="" /><a href="#">All NFTs</a></li>
                    <li><img src="https://opensea.io/static/images/icons/solana-light.svg" alt="" /><a href="#">Solana NFTs</a></li>
                    <li><img src="https://opensea.io/static/images/icons/art-light.svg" alt="" /><a href="#">Art</a></li>
                    <li><img src="https://opensea.io/static/images/icons/collectibles-light.svg" alt="" /><a href="#">Collectibles</a></li>
                    <li><img src="https://opensea.io/static/images/icons/domain-names-light.svg" alt="" /><a href="#">Domain Names</a></li>
                    <li><img src="https://opensea.io/static/images/icons/music-light.svg" alt="" /><a href="#">Music</a></li>
                    <li><img src="https://opensea.io/static/images/icons/photography-category-light.svg" alt="" /><a href="#">Photography</a></li>
                    <li><img src="https://opensea.io/static/images/icons/sports-light.svg" alt="" /><a href="#">Sports</a></li>
                    <li><img src="https://opensea.io/static/images/icons/trading-cards-light.svg" alt="" /><a href="#">Trading Cards</a></li>
                    <li><img src="https://opensea.io/static/images/icons/utility-light.svg" alt="" /><a href="#">Utility</a></li>
                    <li><img src="https://opensea.io/static/images/icons/virtual-worlds-light.svg" alt="" /><a href="#">Virtual Worlds</a></li>
                </ul>
               </div>
            </li>
            <li>
            <a href="#">Stats</a>
            <div className='dropDownStats'>
            <ul >
                    <li><a href="#">Rankings</a></li>
                    <li><a href="#">Activity</a></li>
                   
 
                </ul>
                </div>
            </li>
            <li>
            <a href="#">Resources</a>
            <div className='dropDownResour'>
            <ul >
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Platform Status</a></li>
                    <li><a href="#">Solana NFTs</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Taxes</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Docs</a></li>
                    <li><a href="#">News Letters</a></li>
                    <li><a href="#"></a></li>
 
                </ul>
                </div>
            </li>
            <li>
            <a href="#">Create</a>
            <div className='dropDownCreate'>
                    
                </div>
            </li>
            <li>
            <a href="#"><CgProfile size={"30px"} color={"black"} /></a>
            <div className='dropDownProfile'>
                    
                </div>
            </li>
            <li>
            <a href="#">
                <MdOutlineAccountBalanceWallet size={"30px"} color={"black"} />
            </a>
            </li>
            <li>
            <a href="#"><MdOutlineShoppingCart size={"30px"} color={"black"}/></a>
            <div className='dropDownCart'>
                    
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
