import './announcement.css';
import Container from '../../components/container/container.jsx';
import CustomButton from '../../components/custom-button/custom-button.jsx'
import Icon from '../../components/icon/icon.jsx'
import AvatarRating from '../../components/avatar-rating/avatar-rating.jsx'
import PropTypes from 'prop-types';

function Announcement({ scrollToMembership }) {
    return (
        <footer className="announcement">
            <Container>
                <div className="announcement__content">
                    <h2 className="text-2 announcement__title">Ready to debug your reading list?</h2>
                    <CustomButton type='secondary' onClick={scrollToMembership}>
                        <span>REVIEW MEMBERSHIP OPTIONS</span>
                        <Icon id='arrowUp' pointer={true}/>
                    </CustomButton>
                    <AvatarRating/>
                </div>
                <div className="announcement__footer">
                    <div className='announcement__company'>
                        @ 2024 - Tech Book Club
                    </div>
                    <div className='announcement__social-links'>
                        <a href='#'><Icon id='blueSky' pointer={true}/></a>
                        <a href='#'><Icon id='linkedIn' pointer={true}/></a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

Announcement.propTypes = {
    scrollToMembership: PropTypes.func.isRequired
}

export default Announcement;
