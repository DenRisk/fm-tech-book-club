import './journey-step.css'
import PropTypes from 'prop-types';
import Icon from '../icon/icon.jsx'

function JourneyStep({count, label, useArrow = true}) {
  return (
    <div className="journey-step">
        <div className="journey-step__icon-container">
            <div className='journey-step__count-container'>{count}</div>
            {useArrow && <Icon id='patternArrow' pointer={false}/>}
        </div>
        <p className="journey-step__label">{label}</p>
    </div>
  )
}

JourneyStep.propTypes = {
    count: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    useArrow: PropTypes.bool
}

export default JourneyStep;