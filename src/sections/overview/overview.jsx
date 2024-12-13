import './overview.css';
import Logo from '../../components/logo/logo.jsx'
import Container from '../../components/container/container.jsx'
import CustomButton from '../../components/custom-button/custom-button.jsx'
import Icon from '../../components/icon/icon.jsx'
import AvatarRating from '../../components/avatar-rating/avatar-rating.jsx'
import Image from '../../components/image/image.jsx'
import { motion } from 'framer-motion';

function Overview() {
    return (
        <section className='overview'>
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
                        <CustomButton type='primary' fullWidth={true} maxWidth={380}>
                            <span>REVIEW MEMBERSHIP OPTIONS</span>
                            <Icon id='arrowDown' pointer={true}/>
                        </CustomButton>
                        <AvatarRating/>
                    </motion.div>
                    <motion.div
                        className='overview__image-container'
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                    >
                        <Image
                            src='src/assets/images/image-hero-mobile.webp'
                            sizes={{
                                mobile: 'src/assets/images/image-hero-mobile.webp',
                                tablet: 'src/assets/images/image-hero-tablet.webp',
                                desktop: 'src/assets/images/image-hero-desktop.webp'
                            }}
                            alt='Studying people'
                            loadingStrategy='lazy'
                        />
                    </motion.div>
                </div>
            </Container>
            <div className='overview__glow'>
                <Image src='src/assets/images/pattern-glow.svg' alt='glowing ellipse' loadingStrategy='lazy'/>
            </div>
        </section>
    );
}

export default Overview;