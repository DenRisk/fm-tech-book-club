import './benefits.css';
import Container from '../../components/container/container.jsx';
import ReadonlyCheckbox from '../../components/readonly-checkbox/readonly-checkbox.jsx';
import Image from '../../components/image/image.jsx';
import { motion } from 'framer-motion';

// Images
import imageReadTogetherMobile from '../../assets/images/image-read-together-mobile.webp';
import imageReadTogetherTablet from '../../assets/images/image-read-together-tablet.webp';
import imageReadTogetherDesktop from '../../assets/images/image-read-together-desktop.webp';

function Benefits() {
    return (
        <section className="benefits">
            <Container>
                <div className="benefits__content">
                    <motion.div
                        className="benefits__text-container"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                    >
                        <h2 className="text-2 benefits__title">Read together, grow together</h2>
                        <div className="benefits__readonly-checkboxes">
                            <ReadonlyCheckbox
                                label="Monthly curated tech reads selected by industry experts"
                            />
                            <ReadonlyCheckbox
                                label="Virtual and in-person meetups for deep-dive discussions"
                            />
                            <ReadonlyCheckbox
                                label="Early access to new tech book releases"
                            />
                            <ReadonlyCheckbox
                                label="Author Q&A sessions with tech thought leaders"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="benefits__image-container"
                        initial={{opacity: 0, x: -100}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: false, amount: 0.1}}
                        transition={{duration: 0.5}}
                    >
                        <Image
                            src={imageReadTogetherMobile}
                            alt="people are reading a book"
                            sizes={{
                                mobile: imageReadTogetherMobile,
                                tablet: imageReadTogetherTablet,
                                desktop: imageReadTogetherDesktop,
                            }}
                            loadingStrategy="lazy"
                        />
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

export default Benefits;
