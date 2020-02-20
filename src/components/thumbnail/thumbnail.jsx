import React from 'react'

const Thumbnail = ({ size }) => {

    var thumbSize = '40px'
    if (size === 'xs')
        thumbSize = '20px'
    else if (size === 'lg')
        thumbSize = '60px'
    else if (size === 'xl')
        thumbSize = '90px'

    const thumbStyle = {
        width: thumbSize,
        height: thumbSize,
        backgroundColor: '#ddd',
        borderRadius: '50%',
        float: 'left',
        margin: '0 15px 0 0'
    }

    return (
        <span style={thumbStyle}>
        </span>
    )
}

export default Thumbnail