import Preloader from '../../Common/Preloader/Preloader';
import M from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <img className={M.content__img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU" /> */}
            <div className={M.MainPost}>
                <img id={M.img} src={props.profile.photos.small} />
                <ProfileStatus  status = {props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}
export default ProfileInfo;