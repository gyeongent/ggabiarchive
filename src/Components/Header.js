import React from "react";
import { NavLink } from "react-router-dom";

import '../App.css'

function Header(){
    return(
        <div className="header">
            <div className="headerLogo">
                로고
            </div>
            <div>
                <ul className="headerItems">
                    <li>
                        <NavLink to='/profile'>
                            프로필
                        </NavLink>
                    </li>
                    <li>
                        앨범
                    </li>
                    <li>
                        퀴즈
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;