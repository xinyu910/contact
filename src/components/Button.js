import PropTypes from 'prop-types'

const Button = ({ className, text, onClick }) => {
    return (
        <button
            className={className}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button