import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <svg className="icon menu" viewBox="0 0 24 24">
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
          <strong>Top all time movies</strong>
          <div className="icon-tray">
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
            </svg>
          </div>
        </div>
        <div className="nav-spacer"></div>
      </div>
    );
  }
}

export default Navbar;
