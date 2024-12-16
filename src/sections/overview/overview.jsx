import './overview.css';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Logo from '../../components/logo/logo.jsx';
import Container from '../../components/container/container.jsx';
import CustomButton from '../../components/custom-button/custom-button.jsx';
import Icon from '../../components/icon/icon.jsx';
import Image from '../../components/image/image.jsx'

// Images
import heroMobileImage from '../../assets/images/image-hero-mobile.webp';
import heroTabletImage from '../../assets/images/image-hero-tablet.webp';
import heroDesktopImage from '../../assets/images/image-hero-desktop.webp';
import glowImage from '../../assets/images/pattern-glow.svg';
import patternLightBg from '../../assets/images/pattern-light-bg.svg';


function Overview({scrollToMembership}) {

    const style = {
        backgroundImage: `url(${patternLightBg})`,
    };

    return (
        <section className='overview' style={style}>
            <Container>
                <header className='header'>
                    <Logo/>
                </header>
                <div className='overview__content'>
                    <motion.div
                        className='overview__text-container'
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                    >
                        <h1 className='text-1 overview__title'>Join the ultimate tech book club</h1>
                        <p className='text-5-regular overview__description'>Turn your reading time into learning time
                            with
                            fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up
                            your skills one chapter at a time.</p>
                        <CustomButton type='primary' fullWidth={true} maxWidth={380} onClick={scrollToMembership}>
                            <span>REVIEW MEMBERSHIP OPTIONS</span>
                            <Icon id='arrowDown' pointer={true}/>
                        </CustomButton>
                    </motion.div>
                    <motion.div
                        className='overview__image-container'
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 0.5}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: false, amount: 0.1}}
                    >
                        <Image
                            src={heroMobileImage}
                            sizes={{
                                mobile: heroMobileImage,
                                tablet: heroTabletImage,
                                desktop: heroDesktopImage
                            }}
                            alt='Studying people'
                            loadingStrategy='lazy'
                        />
                    </motion.div>
                </div>
            </Container>
            <div className='overview__glow'>
                <Image src={glowImage} alt='glowing ellipse' loadingStrategy='lazy'/>
            </div>
        </section>
    );
}

Overview.propTypes = {
    scrollToMembership: PropTypes.func.isRequired
}

export default Overview;