import './custom-button.css';
import PropTypes from 'prop-types';

export default function CustomButton({children, type, fullWidth, onClick, disabled, maxWidth}) {
    return (
        <button
            disabled={disabled}
            className={`custom-button custom-button--${type} 
            ${fullWidth ? 'custom-button--full-width' : ''}`}
            onClick={onClick}
            style={{ maxWidth: `${maxWidth}px` }}
        >
            {children}
        </button>
    )
}

CustomButton.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary']),
    fullWidth: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    maxWidth: PropTypes.number
}