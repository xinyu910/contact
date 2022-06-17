import PropTypes from 'prop-types'

const Button = ({ className, text, onClick, type }) => {
    return (
        <button
            className={className}
            onClick={onClick}
            type={type}
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