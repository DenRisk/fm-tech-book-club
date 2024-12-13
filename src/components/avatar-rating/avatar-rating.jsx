import './avatar-rating.css'
import Icon from '../icon/icon.jsx'
import Image from '../image/image.jsx'
import avatarImage from '../../assets/images/image-avatars.webp';

function AvatarRating() {
  return (
    <div className='avatar-rating'>
        <div className='avatar-rating__image-container'>
            <Image src={avatarImage} alt='Avatar' loadingStrategy='lazy'/>
        </div>
        <div className='avatar-rating__ratings'>
            <div className='avatar-rating__stars'>
                <Icon id='star' pointer={false}/>
                <Icon id='star' pointer={false}/>
                <Icon id='star' pointer={false}/>
                <Icon id='star' pointer={false}/>
                <Icon id='star' pointer={false}/>
            </div>
            <p>200+ developers joined already</p>
        </div>
    </div>
  );
}

export default AvatarRating;