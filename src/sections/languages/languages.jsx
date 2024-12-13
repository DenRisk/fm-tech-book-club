import './languages.css';
import Container from '../../components/container/container.jsx';
import Image from '../../components/image/image.jsx';
import { motion } from 'framer-motion';
import Icon from '../../components/icon/icon.jsx'

// Images
import imageNotAverageMobile from '../../assets/images/image-not-average-mobile.webp';
import imageNotAverageTablet from '../../assets/images/image-not-average-tablet.webp';
import imageNotAverageDesktop from '../../assets/images/image-not-average-desktop.webp';
import imageCircle from '../../assets/images/pattern-circle.png';


function Languages() {
    return (
        <section className="languages">
            <Container>
                <div className="languages__content">
                    <motion.div
                        className="languages__text-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-2 languages__title">
                            <span>Not your average book </span>
                            <span className='languages__circle-container'>
                                <span>club</span>
                                <Image src={imageCircle} alt='circle around text'/>
                            </span>
                        </h2>
                        <p className='text-5-regular languages__paragraph'>Connect with a community that speaks your language - from <strong>Python</strong> to <strong>TypeScript</strong> and everything in between. Our discussions blend technical depth with practical applications.</p>
                    </motion.div>

                    <motion.div
                        className="languages__image-container"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: false, amount: 0.1}}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={imageNotAverageMobile}
                            alt="people are reading a book"
                            sizes={{
                                mobile: imageNotAverageMobile,
                                tablet: imageNotAverageTablet,
                                desktop: imageNotAverageDesktop,
                            }}
                            loadingStrategy="lazy"
                        />
                    </motion.div>

                    <div className='languages__tech'>
                        <Icon id='tech' pointer={false}/>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Languages;
