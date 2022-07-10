import PropTypes from 'prop-types'
import React from 'react'

class Button extends React.Component {

    render() {
        return (
            <div>
                <button className='btn' style={{ backgroundColor: this.props.color}} onClick={() => this.props.onClick()}>
                    {this.props.text}
                </button>
            </div>

        )
    }
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