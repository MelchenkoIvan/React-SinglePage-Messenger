import React from 'react'


const Profile = () => {
    return (
        <div className="content">
            <img className="content__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU" />
            <div className="content__user">
                <img className="content__user__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJ774VL7RjYJGKgiFM2E1DmvLT3NeldlBWA&usqp=CAU" />
                <div className="content__user__data">
                    <h3>Dmitry K.</h3>
                    <p>
                        Date of Birth:2january<br />
                                City: Minsk<br />
                                Edication:BSU'11<br />
                                Web Site:adsdasdad<br />
                    </p>

                </div>
            </div>
            <div className="content__post">
                My post
                        <div>
                    New post
                        </div>
            </div>

        </div>
        );
}
export default Profile;
