import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';


function Header() {

    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">
            <div class="header__left">
                <MenuSharpIcon/>
                <Link to ="/">
                    <img className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/512px-YouTube_Logo.svg.png" alt="Youtube"
                    />
                </Link>
                

            </div>
            
            <div className="header_input">
                <input onChange={e => setInputSearch(e.target.value)} placeholder="Search" type = "text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton"/>
                </Link>
                
            </div>

            <div className="header_icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar className="header__icon"
                        src="https://lh3.googleusercontent.com/ogw/ADGmqu9-SMicBaoPkNxxGOZ71w73VvFL68Ano6FD4mz0=s32-c-mo"
                        alt="Rey"
                        />
            </div>
        
        
        </div>
    );   
}

export default Header;