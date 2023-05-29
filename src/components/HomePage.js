import SimpleImageSlider from "react-simple-image-slider";
import {serviceicons} from "../Navmenudata";
import { ReactSVG } from "react-svg";

const HomePage = () => {
    const importAll = (r) => {
        let images = [];
        r.keys().forEach((item, index) => { 
            images.push(r(item)); 
        });
        return images;
    }
    const images = importAll(require.context('../images/slider', false, /\.(png|jpe?g|svg)$/));
    const sliderStyle = {filter: "blur('6px')"}
    return(
        <div className="home-sec">
            <div className="slider-sec">
                <SimpleImageSlider width={"100vw"} height={504} images={images} showBullets={true} showNavs={true} autoPlay={true} slideDuration={1} bgColor="#F0F7AA" style={sliderStyle}/>
            </div>
            <div className="card-sec">
                {serviceicons.map((e)=>{
                    return(
                        <div>
                            <div>{e.name}</div>
                            <img src={e.icon}></img>
                        </div>
                    )
                })}
            </div>
            <div className="aboutus-sec">
                <h1>About Us</h1>
                <p>
                Macho Architects is a interior designing organization based in Tamil
						Nadu. We offer services in <b>Tamil Nadu</b>, <b>Kerala</b> and <b>Karnataka</b>. We are composed of creative designers and experienced Workers. We have a combination of
					experienced and young talented team. In order to provide a streamlined execution in each stage of project our designing and
					execution team is outfitted with latest software's machinery and hand tools which helps us to
					deliver quality output on time. We at Macho Architects, recognize that our strength lies in our highly motivated and committed team
					with knowledge, experience, creativity, thoroughness and professionalism. </p>

					<p class="paragraph">We have a strong reputation for designing executing and delivering premium outputs. MACHO has
					touched the pinnacle of making many happy homes that satisfy the told and untold requirements of
					customer across various niches.</p>
            </div>
        </div>
    )
}
export default HomePage;