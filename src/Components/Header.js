import React from "react";
import { NavLink, Link } from "react-router-dom";

import '../App.css'

function Header(){
    return(
        <div className="headerBox">
            <div className="header">
                <div className="headerLogo">
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + 'logo.png'} className="logo" alt="logo" loading="lazy" />
                    </Link>
                </div>
                <div>
                    <ul className="headerItems">
                        <li>
                            <NavLink to='/profile'>
                                프로필
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/album'>
                                앨범
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/quiz'>
                                퀴즈
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;