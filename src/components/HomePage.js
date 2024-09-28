import SimpleImageSlider from "react-simple-image-slider";
import { serviceicons } from "../Navmenudata";
// import { ReactSVG } from "react-svg";
// import SocialMedia from "./SocialMedia";
import { socialmediainfo } from '../Navmenudata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MuiTabs from "./MuiTab";

const HomePage = () => {
    const importAll = (r) => {
        let images = [];
        r.keys().forEach((item, index) => {
            images.push(r(item));
        });
        return images;
    }
    const images = importAll(require.context('../images/sliderpics', false, /\.(png|jpe?g|svg)$/));

    const sliderStyle = {
        position: 'relative',
        overflow: 'hidden',
        filter: "blur('6px')",
    };
    return (
        <div className="home-sec">
            <div className="slider-sec">
                <div style={sliderStyle}>
                    <SimpleImageSlider
                        width={"100%"}
                        height={"100vh"}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        autoPlay={true}
                        slideDuration={1}
                        bgColor="#F0F7AA"
                    />
                        <div className="quote-sec" style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            textShadow: '1px 1px 2px white',
                            zIndex: 1,
                        }}>Home to beautiful interiors.<br></br>
                            The design process at its best. <br></br>Integrates the aspirations of customer satisfaction.
                        </div>
                </div>
            </div>
            {/* <div className="quote-sec">
                <h1>"The design process at its best. Integrates the aspirations of customer satisfaction"</h1><br></br>
                <div className="line-css"></div>
            </div> */}
            <div className="card-sec">
                {/* {serviceicons.map((e)=>{
                    return(
                        <div className="serviceicons-list">
                            <div>{e.name}</div>
                            <img src={e.icon} alt={e.name}></img>
                        </div>
                    )
                })} */}
                <MuiTabs></MuiTabs>
            </div>
            <div className="aboutus-sec" id="about">
                <h1>About Us</h1>
                <p>
                    Macho Architectz is a interior designing organization based in Tamil
                    Nadu. We offer services in <b>Tamil Nadu</b>, <b>Kerala</b> and <b>Karnataka</b>. We are composed of creative designers and experienced Workers. We have a combination of
                    experienced and young talented team. In order to provide a streamlined execution in each stage of project our designing and
                    execution team is outfitted with latest software's machinery and hand tools which helps us to
                    deliver quality output on time. We at Macho Architectz, recognize that our strength lies in our highly motivated and committed team
                    with knowledge, experience, creativity, thoroughness and professionalism. </p>

                <p className="paragraph">We have a strong reputation for designing executing and delivering premium outputs. MACHO has
                    touched the pinnacle of making many happy homes that satisfy the told and untold requirements of
                    customer across various niches.</p>
            </div>
            <div className='footer-social-media'>
                {socialmediainfo.map((ele) => {
                    return (
                        <a key={ele.title} href={ele.href} target={ele.target} title={ele.title}>
                            <FontAwesomeIcon icon={ele.icons}></FontAwesomeIcon>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
export default HomePage;