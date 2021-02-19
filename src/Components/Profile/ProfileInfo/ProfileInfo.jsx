import Preloader from '../../Common/Preloader/Preloader';
import M from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <img className={M.content__img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU" />
            <div className={M.MainPost}>
                <img id={M.img} src={props.profile.photos.small} />
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