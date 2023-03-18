import React from "react";

import '../App.css'

function Profile(){
    return(
        <div className="container">
            <div className="profile">
                <div className="profileImg">
                    <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="profile" loading="lazy"/>
                    <div className="profileTitle">
                        까비
                    </div>
                </div>
                <div className="profileDesc">
                    <p>이름 : 까비</p>
                    <p>출생 : 2017년 12월 24일(추정)</p>
                    <p>좋아하는 것 : 간식, 산책</p>
                    <p>무서워 하는 것 : 천둥, 번개</p>
                    <p>특징 : 목 뒤쪽 바로 아래 날개같은 하얀 털이 있음</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;