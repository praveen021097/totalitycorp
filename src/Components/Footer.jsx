import React from "react";
import "./footer.css";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className="container">
      <div className="upperFooter">
        <div className="signup">
          <h3>Stay in the loop</h3>
          <div className="signContent">
            <p>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </p>
            <div className="searchSign">
              <input type="text" placeholder="Your email address" />{" "}
              <button>Sign up</button>
            </div>
          </div>
        </div>

        <div className="joinCommunity">
          <h3>Join the community</h3>
          <div className="icons">
            <div>
              <a href="#">
                <FaTwitter size={"20px"} color={"white"} />
              </a>
            </div>
            <div>
              <a href="#">
                <CiInstagram size={"20px"} color={"white"} />
              </a>
            </div>
            <div>
              <a href="#">
                <FaDiscord size={"20px"} color={"white"} />
              </a>
            </div>
            <div>
              <a href="#">
                <FaRedditAlien size={"20px"} color={"white"} />
              </a>
            </div>
            <div>
              <a href="#">
                <FaYoutube size={"20px"} color={"white"} />
              </a>
            </div>
            <div>
              <a href="#">
                <FaTiktok size={"20px"} color={"white"} />
              </a>
            </div>
            <div>
              <a href="#">
                <MdMailOutline size={"20px"} color={"white"} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="midFooter">
        <div className="about">
          <img
            src="https://opensea.io/static/images/logos/opensea-white.svg"
            alt=""
          />
          <h3>OpenSea</h3>
          <div>
            <p>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
          </div>
        </div>
        <div className="marketMyAcc">
          <div className="marketPlace">
            <h4>Marketplace</h4>
            <a href="#"> All NFTs</a>
            <a href="#">Solana NFTs</a>
            <a href="#">Art</a>
            <a href="#">Collectibles</a>
            <a href="#">Domain Names</a>
            <a href="#">Music</a>
            <a href="#">Photography</a>
            <a href="#">Sports</a>
            <a href="#">Trading Cards</a>
            <a href="#">Utility</a>
            <a href="#">Virtual Worlds</a>
          </div>
          <div className="myAccounts">
            <h4>My Account</h4>
            <a href="#"> Profile</a>
            <a href="#">Favorites</a>
            <a href="#">Watchlist</a>
            <a href="#">My Collections</a>
            <a href="#">Settings</a>
            <h4>Stats</h4>
            <a href="#">Rankings</a>
            <a href="#">Activity</a>
          </div>
        </div>
        <div className="resourComp">
          <div className="resources">
            <h4>Resources</h4>
            <a href="#">Learn</a>
            <a href="#">Help Center</a>
            <a href="#">Platform Status</a>
            <a href="#">Partners</a>
            <a href="#">Taxes</a>
            <a href="#">Blog</a>
            <a href="#">Docs</a>
            <a href="#">Newsletter</a>
          </div>
          <div className="company">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Ventures</a>
            <a href="#">Grants</a>
          </div>
        </div>
      </div>
      <div className="footerOfFooter">
        <div>
          <p>© 2018 - 2022 Ozone Networks, Inc</p>
        </div>
        <div>
          <p>Privacy Policy Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
