import React, { useState } from "react";
import {menuitems} from "../Navmenudata";
import macho from "../images/logo/macho.png"
import MuiDialog from './MuiDialog';

export default function Navbar() {
  const removebullet = {listStyleType: "none"};
  const [clicked,setHamburger] = useState(false);
  const [showOrHide, setShowOrHide] = useState(false);
  const hamClicked = ()=>{
    setHamburger((prev)=>!prev);
  }
  const showMuiDialog = ()=>{
    setShowOrHide(true);
  }
  const updateParentFlag = (flagVal)=>{
    setShowOrHide(flagVal);
  }
  return (
    <div>
      <nav className="navbaritems">
        <h1 className="macho-logo">
          <img src={macho} alt="macho logo" width="150px" />
        </h1>
        <div className="menu-icons" onClick={hamClicked}>
          <i className={clicked? "fas fa-times":"fas fa-bars"}></i>
        </div>
        <ul className={clicked? "nav-menu active":"nav-menu"} style={removebullet}>
          {menuitems.map((element) => {
          return(
              element.title !== "Contact" ?
              (<li key={element.title} >
                  <a href={element.url} className={element.cName}> 
                      <i className={element.icon}></i>{element.title}
                  </a>
              </li>) : 
              (<li key={element.title} >
                <div onClick={showMuiDialog} className={element.cName}> 
                    <i className={element.icon}></i>{element.title}
                </div>
            </li>))
          })}
        </ul>
      </nav>
      <MuiDialog Show={showOrHide} UpdateParent={updateParentFlag}></MuiDialog>
    </div>
  );
}
