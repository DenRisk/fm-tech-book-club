import './avatar-rating.css'
import Icon from '../icon/icon.jsx'
import Image from '../image/image.jsx'

function AvatarRating() {
  return (
    <div className='avatar-rating'>
        <div className='avatar-rating__image-container'>
            <Image src='src/assets/images/image-avatars.webp' alt='Avatar' loadingStrategy='lazy'/>
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