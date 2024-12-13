import './benefits.css';
import Container from '../../components/container/container.jsx';
import ReadonlyCheckbox from '../../components/readonly-checkbox/readonly-checkbox.jsx';
import Image from '../../components/image/image.jsx';
import { motion } from 'framer-motion';

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

function Benefits() {
    return (
        <section className="benefits">
            <Container>
                <div className="benefits__content">
                    <div className="benefits__text-container">
                        <h2 className="text-2 benefits__title">Read together, grow together</h2>

                        <motion.div
                            className="benefits__readonly-checkboxes"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div variants={item}>
                                <ReadonlyCheckbox
                                    label="Monthly curated tech reads selected by industry experts"
                                />
                            </motion.div>
                            <motion.div variants={item}>
                                <ReadonlyCheckbox
                                    label="Virtual and in-person meetups for deep-dive discussions"
                                />
                            </motion.div>
                            <motion.div variants={item}>
                                <ReadonlyCheckbox
                                    label="Early access to new tech book releases"
                                />
                            </motion.div>
                            <motion.div variants={item}>
                                <ReadonlyCheckbox
                                    label="Author Q&A sessions with tech thought leaders"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="benefits__image-container"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src="src/assets/images/image-read-together-mobile.webp"
                            alt="people are reading a book"
                            sizes={{
                                mobile: 'src/assets/images/image-read-together-mobile.webp',
                                tablet: 'src/assets/images/image-read-together-tablet.webp',
                                desktop: 'src/assets/images/image-read-together-desktop.webp',
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
