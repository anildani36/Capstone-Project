import React from 'react'
import "../css/Footer.css"

function Footer() {
    return (
        <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h5  style={{ color:'SeaGreen  ' }}>DRACO CAPSTONE PRO:-</h5>
            <div className="list-unstyled">
              <li>7980123346</li>
              <li>KOLKATA, INDIA</li>
              <li>123 KGP Street</li>
            </div>
          </div>
          {/* Column2 */}
          <div className="col">
            <h5  style={{ color:'SeaGreen  ' }}>ABOUT:-</h5>
            <ui className="list-unstyled">
                
              <li>SWEETS</li>
              <li>CHOCOLATES</li>
              <li>CAKES</li>
              
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h5  style={{ color:'SeaGreen  ' }}>CONTACT:-</h5>
            <ui className="list-unstyled">
                
              <li>FACEBOOK</li>
              <li>INSTAGRAM</li>
              <li>EMAIL</li>
              
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm"  style={{ color:'SeaGreen  ',paddingLeft:'33%' }}>
            &copy;{new Date().getFullYear()} DRACO SOAL | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
    )
}

export default Footer
