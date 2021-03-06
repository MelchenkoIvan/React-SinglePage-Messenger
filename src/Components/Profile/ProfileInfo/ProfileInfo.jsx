import Preloader from '../../Common/Preloader/Preloader';
import M from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../Assets/Images/user.png'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    const mainPhotoSelected = (e) =>{
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={M.MainPost}>
                <img id={M.img} src={props.profile.photos.small || userPhoto} className={M.mainPhoto} />
                { props.isOwner && <input type={"file"} onChange = {mainPhotoSelected}/>}
                <ProfileStatusWithHooks  status = {props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}
export default ProfileInfo;