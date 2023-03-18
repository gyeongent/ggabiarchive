import React from "react";
import { Link } from "react-router-dom";

import '../App.css'

function NotFound(){
    return(
        <div className="Notfound">
            <div>
                잠자는 중...
                <span>
                    <Link to="/">
                        조용히 돌아가기
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default NotFound;