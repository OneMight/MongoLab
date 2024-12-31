import './Footer.css'
import {Link} from 'react-router-dom'
export default function Footer(){
    return(
        <footer>
            <div className="footer-con">
                <img src="/images/static/Logo.png" alt="" />
                <div className="social-container">
                    <Link to="https://www.instagram.com/gerineq/">
                        <img src="/images/IG.png" alt="" />
                    </Link>
                       
                    <Link to="https://vk.com/gerineq">
                        <img src="/images/VK.png" alt="" />
                    </Link>
                    <Link to='https://t.me/Gerineq'>
                        <img src="/images/TG.png" alt="" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}