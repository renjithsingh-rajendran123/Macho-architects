import React, { useState } from "react";
import {menuitems} from "../Navmenudata";
import macho from "../images/logo/macho_logo.png"
import MuiDialog from './MuiDialog';
import { Link } from "react-router-dom";

export default function Navbar() {
  const removebullet = {listStyleType: "none"};
  const [clicked,setHamburger] = useState(false);
  const [showOrHide, setShowOrHide] = useState(false);
  const hamClicked = (title)=>{
    if(title !== "Call us "){
      setHamburger((prev)=>!prev);
    }
  }
  const showMuiDialog = ()=>{
    setShowOrHide(true);
  }
  const updateParentFlag = (flagVal)=>{
    setShowOrHide(flagVal);
    setHamburger((prev)=>!prev);
  }
  return (
    <div>
      <nav className="navbaritems">
        <h1 className="macho-logo" style={{height:"100%"}}>
          <img src={macho} alt="macho logo" width="150px" style={{
            padding: "5px",
            height: "100%"
          }} />
        </h1>
        <div className="menu-icons" onClick={hamClicked}>
          <i className={clicked? "fas fa-times":"fas fa-bars"}></i>
        </div>
        <ul className={clicked? "nav-menu active":"nav-menu"} style={removebullet}>
          {menuitems.map((element) => {
          return(
              element.title !== "Contact" ?
              (<li key={element.title} >
                  <Link to={element.url} className={element.cName} onClick={()=>{hamClicked(element.title)}}> 
                      <i className={element.icon}></i>{element.title}
                  </Link>
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
