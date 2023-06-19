import { useEffect, useState } from "react";
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Works = () =>{
    let imagesone = require.context('../images/completedprojects', true);
    let imagestwo = require.context('../images/designs', true);
    let imagesthree = require.context('../images/sitephotos', true);
    const [designs, setDesign] = useState(Array(52).fill(0));
    const [completed, setCompleted] = useState(Array(73).fill(0));
    const [sites, setSites] = useState(Array(61).fill(0));
    const fetchUserData = () => {
        debugger;
        fetch("https://drive.google.com/drive/folders/1e822wglfmoMWLR6wn-0dj9fogVzmYZTG?usp=sharing").then(response => {
            debugger;
            return response.json()
          }).then((e)=>{
            debugger;
            setCompleted(e);
        })
    }
    useEffect(()=>{
        // fetchUserData();
    },[])
    return(
        <div className="works" id="works">
            <div className="works-menu" id="menulist">
                <div><a href="#completed1">Our 3D Designs</a></div>
                <div><a href="#designs1">Our Completed Site Pictures</a></div>
                <div><a href="#sites1">Our Working Images</a></div>
            </div>
            <div className="works-gallery">
                <div id="completed1"></div>
                <h1 id="completed">Our 3D Designs</h1>
                <div className="completed-projects">
                    {
                        designs.map((e,index)=>{
                            return(
                                <img src={imagestwo(`./${index+1}.jpg`)} alt={`${index}`}></img>
                            )
                        })
                    }
                </div>
                <div id="designs1"></div>
                <h1 id="designs">Our Completed Site Pictures</h1>
                <div className="designs-imgs">
                    {
                        completed.map((e,index)=>{
                            return(
                                <img src={imagesone(`./${index+1}.jpg`)} alt={`${index}`}></img>
                            )
                        })
                    }
                </div>
                <div id="sites1"></div>
                <h1 id="sites">Our Working Images</h1>
                <div className="site-photos">
                    {
                        sites.map((e,index)=>{
                            return(
                                <img src={imagesthree(`./${index+1}.jpg`)} alt={`${index}`}></img>
                            )
                        })
                    }
                </div>
            </div>
            <a href="#works">
                <FontAwesomeIcon icon={faAngleDoubleUp} className="fa-bounce"></FontAwesomeIcon>
            </a>
        </div>
    );
}
export default Works;