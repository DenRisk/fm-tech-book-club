import './journey.css';
import Container from '../../components/container/container.jsx';
import JourneyStep from '../../components/journey-step/journey-step.jsx';
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function Journey() {

    return (
        <section className="journey">
            <Container>
                <div className="journey__content">
                    <h2 className="text-2 journey__title">Your tech reading journey</h2>
                    <motion.div
                        className='journey__steps'
                        variants={staggerContainer}
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }} // Passe `amount` an
                    >
                        <motion.div variants={item}>
                            <JourneyStep count={1} label='Choose your membership tier' />
                        </motion.div>
                        <motion.div variants={item}>
                            <JourneyStep count={2} label='Get your monthly book selection' />
                        </motion.div>
                        <motion.div variants={item}>
                            <JourneyStep count={3} label='Join our discussion forums' />
                        </motion.div>
                        <motion.div variants={item}>
                            <JourneyStep count={4} label='Attend exclusive meetups' useArrow={false} />
                        </motion.div>
                    </motion.div>
                    <div className='journey__glow'>
                        <Image
                            src='src/assets/images/pattern-glow.svg'
                            alt='glowing ellipse'
                            loadingStrategy='lazy'
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Journey;
