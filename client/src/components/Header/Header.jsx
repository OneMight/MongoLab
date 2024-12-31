import './Header.css'
import {Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
export default function Header(){
    const location = useLocation()
    const [activeLink,setActiveLink] = useState(location.pathname)

    useEffect(() => {
        setActiveLink(location.pathname);

    }, [location]);
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    
    return(
        <header>
            <div className="Logo">
                <img src="/images/static/Logo.png" alt="" />
            </div>
            <nav>
                <Link to='/'
                className={`Link ${activeLink === '/' ? 'selected' : ''}`}
                onClick={() => handleLinkClick('/group')}
                >
                    Groups
                </Link>
                <Link to='/teams'
                 className={`Link ${activeLink === '/teams' ? 'selected' : ''}`}
                 onClick={() => handleLinkClick('/teams')}
                 >
                    Teams
                </Link>
                <Link to='/pilots'
                className={`Link ${activeLink === '/pilots' ? 'selected' : ''}`}
                onClick={() => handleLinkClick('/pilots')}
                >
                    Pilots
                </Link>

            </nav>
           
            <BurgerMenu activeLink ={activeLink} handleChangeColor ={handleLinkClick}/>
        </header>
    )
}