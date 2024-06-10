import {useEffect} from "react";
import Logo from "./../assets/img/Logo.png"
import Search from "./../assets/icon/search.png"
import List from "./../assets/icon/list_icon.png"
import Register from "./../assets/icon/register.png";
import Login from "./../assets/icon/login.png";
import { Link } from 'react-router-dom';
import "../css/Header.scss"
import { useLocation } from 'react-router-dom';

function Header(){

    const location = useLocation().pathname.substring(1);
    return(
        <div className="header">
            <div className="header_top">
                <Link to="/">
                    <img className="logo" src={Logo}/>
                </Link>
                <div className="user_box">
                    <Link to="/register">
                        <img src={Register} />
                    </Link>
                    <Link to="/login">
                        <img src={Login} />
                    </Link>
                </div>
                <div className="search_box">
                    <div className="input_box">
                        <img src={Search} className="search_icon" />
                        <input placeholder="Search"/>
                    </div>
                    <img src={List}/>
                </div>
            </div>
            <div className="menu_bar">
                <ul>
                    <li><Link to="/board" className={`${location == "board" ? "selected" : ""}`}>게시판</Link>
                    </li>
                    <li>
                        <Link to="/volunteer" className={`${location == "volunteer" ? "selected" : ""}`}>봉사</Link>
                    </li>
                    <li>
                        <Link to="/adotion" className={`${location == "adotion" ? "selected" : ""}`}>입양</Link>
                    </li>
                </ul> 
            </div>
        </div>
    )
}

export default Header;