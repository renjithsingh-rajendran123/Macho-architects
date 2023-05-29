
import facebook from './images/socialmedia/facebook.svg';
import gmail from './images/socialmedia/gmail.svg';
import instagram from './images/socialmedia/instagram.svg';
import whatsapp from './images/socialmedia/whatsapp.svg';
import ACP_Elevation from "./images/services/acpelevation.png";
import Glazing from "./images/services/glazing.png";
import False_ceiling from "./images/services/falseceiling.png";
import Carpentry from "./images/services/carpentry.png";
import Wallpaper from "./images/services/wallpaper.png";
import Fabrication from "./images/services/fabrication.png";
import {faFacebook,faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

export const menuitems = [
    {title:"Home",icon:"fa-solid fa-house-user",url:"#",cName:"nav-link"},
    {title:"Our Works",icon:"fa-solid fa-briefcase",url:"#",cName:"nav-link"},
    {title:"Contact",icon:"fa-solid fa-address-card",url:"#",cName:"nav-link"},
    {title:"About",icon:"fa-solid fa-circle-info",url:"#",cName:"nav-link"},
    {title:"Call us ",icon:"fa-solid fa-phone",url:"#",cName:"nav-link phonenumber"}]

export const socialmediainfo = [
    {icons:faWhatsapp,src:whatsapp,title:"WhatsApp Us",cName:"fa-brands fa-whatsapp",target:"_blank",href:"https://wa.me/+918660109805?text=Hi, I'm interested in availing MACHO services. Can you please help me?"},
    {icons:faFacebook,src:facebook,title:"Visit our Facebook",cName:"fa-brands fa-facebook",target:"_blank",href:"https://www.facebook.com/machoarchitects"},
    {icons:faEnvelope,src:gmail,title:"Get in touch via mail",cName:"fa-solid fa-envelope",target:"_blank",
    href:"mailto:machoarchitects@gmail.com?subject=Service%20Request&body=Hi, I'm interested in availing MACHO services. Can you please help me?"},
    {icons:faInstagram,src:instagram,title:"Visit our Instagram",cName:"fa-brands fa-instagram",target:"_blank",href:"https://www.instagram.com/architect_macho/"}
];

export const serviceicons = [
    {icon: ACP_Elevation,icons:"../images/services/acpelevation.svg", name: "ACP Elevation"},
    {icon: Glazing,icons:"../images/services/Glazing.svg", name: "Glazing Works"},
    {icon: False_ceiling,icons:"../images/services/False_ceiling.svg", name: "False ceiling"},
    {icon: Carpentry,icons:"../images/services/Carpentry.svg", name: "Carpentry Works"},
    {icon: Wallpaper,icons:"../images/services/Wallpaper.svg", name: "Wall paper"},
    {icon: Fabrication,icons:"../images/services/Fabrication.svg", name: "FABRICATION"}
]