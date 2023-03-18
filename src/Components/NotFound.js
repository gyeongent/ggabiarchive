import React from "react";
import { Link, useNavigate } from "react-router-dom";

import '../App.css'

function NotFound(){

    const navigate = useNavigate();

    return(
        <div className="Notfound">
            <div className="NfImgs">
                <img />
            </div>
            <div className="NfInfo">
                자료 수집중
                <span>
                    <Link to={navigate(-2)}>
                        &#xE000; 이전 페이지로 돌아가기
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default NotFound;