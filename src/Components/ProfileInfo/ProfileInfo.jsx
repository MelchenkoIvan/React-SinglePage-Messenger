import M from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img className={M.content__img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU" />
            <div className={M.MainPost}>
                <img id={M.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJ774VL7RjYJGKgiFM2E1DmvLT3NeldlBWA&usqp=CAU" />
                <div className={M.data}>
                    <h3>Dmitry K.</h3>
                    <p>
                        Date of Birth:2january<br />
                                City: Minsk<br />
                                Edication:BSU'11<br />
                                Web Site:adsdasdad<br />
                    </p>
                </div>
            </div>
        </div>
        
        )
}
export default ProfileInfo;