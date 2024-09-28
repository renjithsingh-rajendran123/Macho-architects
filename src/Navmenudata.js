
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
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const menuitems = [
    {title:"Home",icon:"fa-solid fa-house-user",url:"/home",cName:"nav-link"},
    {title:"Our Works",icon:"fa-solid fa-briefcase",url:"/our-works",cName:"nav-link"},
    {title:"Contact",icon:"fa-solid fa-address-card",url:"/contact",cName:"nav-link"},
    // {title:"About",icon:"fa-solid fa-circle-info",url:"#about",cName:"nav-link"},
    {title:"Call us ",icon:"fa-solid fa-phone",url:"#",cName:"nav-link phonenumber"}]

export const socialmediainfo = [
    {icons:faWhatsapp,src:whatsapp,title:"WhatsApp Us",cName:"fa-brands fa-whatsapp",target:"_blank",href:"https://wa.me/+918660109805?text=Hi, I'm interested in availing MACHO services. Can you please help me?"},
    {icons:faFacebook,src:facebook,title:"Visit our Facebook",cName:"fa-brands fa-facebook",target:"_blank",href:"https://www.facebook.com/machoarchitects"},
    {icons:faEnvelope,src:gmail,title:"Get in touch via mail",cName:"fa-solid fa-envelope",target:"_blank",
    href:"mailto:machoarchitects@gmail.com?subject=Service%20Request&body=Hi, I'm interested in availing MACHO services. Can you please help me?"},
    {icons:faInstagram,src:instagram,title:"Visit our Instagram",cName:"fa-brands fa-instagram",target:"_blank",href:"https://www.instagram.com/architect_macho/"}
];

export const serviceicons = [
    { icon: ACP_Elevation, icons: "../images/services/acpelevation.svg", name: "ACP Elevation" },
    { icon: Glazing, icons: "../images/services/Glazing.svg", name: "Glazing Works" },
    { icon: False_ceiling, icons: "../images/services/False_ceiling.svg", name: "False ceiling" },
    { icon: Carpentry, icons: "../images/services/screwdriver-svgrepo-com.svg", name: "Carpentry Works" },
    { icon: Wallpaper, icons: "../images/services/Wallpaper.svg", name: "Wall paper" },
    { icon: Fabrication, icons: "../images/services/Fabrication.svg", name: "INTERIOR DESIGN" }
]
export const corporateInterior = [{icon: "fas fa-glass-whiskey", name: "12mm Touched Glass Partition"},
    {icon: "fas fa-desktop", name: "Office Tables and Cabinet"},
    {icon: "fas fa-window-maximize", name: "Blinds"},
    {icon: "fas fa-tree", name: "Wooden Flooring"},
    {icon: "fas fa-border-all", name: "Wall Paneling"},
    {icon: "fas fa-cubes-stacked", name: "Rack Shelf"},
    {icon: "fas fa-lightbulb", name: "Exposed False Ceiling"},    
]
export const commercialInterior = [{icon: "fas fa-building", name: "ACP Elevation"},
    {icon: "fas fa-window-restore", name: "Structural Glazing"},
    {icon: "fas fa-table", name: "Counter Table"},
    {icon: "fas fa-lightbulb", name: "False Ceiling"},
    {icon: "fas fa-rod-asclepius", name: "Stainless Steel Rack"},
    {icon: "fas fa-border-all", name: "Wall Paneling"},
    {icon: "fas fa-door-open", name: "Sensor Glass Door"},    
]

export const homeInterior = [
    {icon: "fas fa-home", name: "Walldrop"},
{icon: "fas fa-border-all", name: "Wall Paneling"},
{icon: "fas fa-tv", name: "TV Unit"},
{icon: "fas fa-lightbulb", name: "False Ceiling"},
{icon: "fas fa-utensils", name: "Modular Kitchen"},
{icon: "fas fa-paint-roller", name: "Poly Granite"},
{icon: "fas fa-bed", name: "Bed Cot"},
{icon: "fas fa-rod-asclepius", name: "Stainless Steel with Glass"},
{icon: "fas fa-shower", name: "Glass Shower"},
{icon: "fas fa-umbrella", name: "Roof Work"},
{icon: "fas fa-divide", name: "Partition"},
{icon: "fas fa-tree", name: "Wooden Flooring"},
{icon: "fas fa-torii-gate", name: "Automatic Gates"},
{icon: "fas fa-cogs", name: "Home Automation"},
]