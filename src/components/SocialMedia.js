import React, { useState } from 'react';
import {socialmediainfo} from '../Navmenudata';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import chaticon from "../images/logo/chat.png"

export default function SocialMedia() {
    const [boticon, setBot] = useState(true);
    const changeBotIcon = () => {
        setBot((prev)=>!prev);
    }
    return (
        <div className='social-container'>
            <div className='bot-help' onClick={changeBotIcon}>
                {
                    boticon ? <img src={chaticon} alt="chattext"></img> : <FontAwesomeIcon icon={faCircleXmark}/>
                }
            </div>
            <div className={boticon? 'social-media hide-media': 'social-media show-media'}>
                {socialmediainfo.map((ele)=>{
                    return(
                        <a key={ele.title} href={ele.href} target={ele.target} title={ele.title}>
                            <FontAwesomeIcon icon={ele.icons}></FontAwesomeIcon>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
