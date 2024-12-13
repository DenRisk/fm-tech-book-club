import './readonly-checkbox.css'
import Icon from '../icon/icon.jsx'
import PropTypes from 'prop-types';

function ReadonlyCheckbox({label}) {
  return (
    <div className="readonly-checkbox">
        <Icon id='check' pointer={false}/>
        <span className='text-5-regular readonly-checkbox__label'>{label}</span>
    </div>
  )
}

ReadonlyCheckbox.propTypes = {
    label: PropTypes.string.isRequired
}

export default ReadonlyCheckbox;