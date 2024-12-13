import './membership.css';
import Container from '../../components/container/container.jsx';
import Offer from '../../components/offer/offer.jsx'
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const offerVariantsBotToTop = {
    hidden: {opacity: 0, y: 80},
    visible: {opacity: 1, y: 0, transition: {duration: 0.4}},
};

const offerVariantsLeftToRight = {
    hidden: {opacity: 0, x: -80},
    visible: {opacity: 1, x: 0, transition: {duration: 0.4}},
};

const offerVariantsRightToLeft = {
    hidden: {opacity: 0, x: 80},
    visible: {opacity: 1, x: 0, transition: {duration: 0.4}},
};

function Membership({targetRef}) {
    const isMobile = useMediaQuery({query: '(max-width: 1200px)'});

    return (
        <section className="membership" ref={targetRef}>
            <Container>
                <div className="membership__content">
                    <h2 className='text-2 membership__title'>Membership options</h2>
                    <div className='membership__offers'>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false, amount: 0.5}}
                            variants={offerVariantsLeftToRight}
                        >
                            <Offer label='Starter' price={19} benefits={['1 book/month', 'Online forums']}/>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false, amount: isMobile ? 0.5 : 0.3}}
                            variants={isMobile ? offerVariantsRightToLeft : offerVariantsBotToTop}
                        >
                            <Offer label='Pro' price={29} benefits={['2 books/month', 'Virtual meetups']}
                                   isHighlighted={true}/>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false, amount: 0.5}}
                            variants={isMobile ? offerVariantsLeftToRight : offerVariantsRightToLeft}
                        >
                            <Offer label='Enterprise' benefits={['Team access', 'Private sessions']}/>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

Membership.propTypes = {
    targetRef: PropTypes.object.isRequired,
}

export default Membership;
