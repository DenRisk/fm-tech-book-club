import './offer.css'
import Icon from '../icon/icon.jsx'
import CustomButton from '../custom-button/custom-button.jsx'
import Proptypes from 'prop-types'
import ReadonlyCheckbox from '../readonly-checkbox/readonly-checkbox.jsx'
import Image from '../image/image.jsx'

function Offer({label, price, benefits, isHighlighted = false}) {
    return (
        <div className={`offer ${isHighlighted ? 'offer--highlight' : ''}`}>
            <h3 className='text-4-semibold offer__label'>{label}</h3>
            {price && (
                <div className='offer__price-container'>
                    <span className='text-3'>{`$${price}`}</span>
                    <span className='text-5-regular offer__timespan'>/month</span>
                </div>
            )}
            {
                !price && (
                    <div className='offer__price-container'>
                        <span className='text-3'>Custom</span>
                    </div>
                )
            }
            <hr className='offer__divider'/>
            {
                benefits && (
                    <ul className='offer__benefits'>
                        {benefits.map((benefit, index) => (
                            <li key={index} className='offer__benefit'>
                                <ReadonlyCheckbox label={benefit}/>
                            </li>
                        ))}
                    </ul>
                )}

            <CustomButton type='primary' fullWidth={true}>
                {
                    price ? 'SUBSCRIBE NOW' : 'TALK TO US'
                }
            </CustomButton>

            {
                isHighlighted && (
                    <div className='offer__glow'>
                        <Image
                            src='src/assets/images/pattern-glow.svg'
                            alt='glowing ellipse'
                            loadingStrategy='lazy'/>
                    </div>
                )
            }
        </div>
    )
}

Offer.propTypes = {
    label: Proptypes.string.isRequired,
    price: Proptypes.number,
    benefits: Proptypes.arrayOf(Proptypes.string),
    isHighlighted: Proptypes.bool
}

export default Offer;