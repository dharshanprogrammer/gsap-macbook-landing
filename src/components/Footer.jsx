import React from 'react'
import  {footerLinks} from "../constants/index"  
const Footer = () => {
  return (
    <footer>
        <div className="info">
            <p>More ways to shop : <span>Find an Apple store</span> or <span>other retailer</span> to you or call  000800 040 1966</p>
            <img src="/logo.svg" alt="AppleLogo"/>
        </div>
        <hr/>
        <div className="links">
            <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
            <ul>
              {footerLinks.map(({label,link})=>(
                <li key={label}>
                  <a href={link}>{label}</a>
                </li>
              ))}
            </ul>
        </div>
    </footer>
  )
}

export default Footer
