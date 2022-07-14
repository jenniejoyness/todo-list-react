import PropTypes from 'prop-types'
import React from 'react'

export const Button = (props) => {
    return (
        <div>
            <button  className='btn' style={{ backgroundColor: props.color }} onClick={() => props.onClick()}>
                {props.text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelBlue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button