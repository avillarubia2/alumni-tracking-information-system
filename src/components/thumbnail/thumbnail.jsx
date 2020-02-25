import React from 'react'

const Thumbnail = ({ size }) => {

    var thumbSize = '40px'
    if (size === 'xs')
        thumbSize = '20px'
    else if (size === 'lg')
        thumbSize = '60px'
    else if (size === 'xl')
        thumbSize = '90px'
    else if (size == "contain")
        thumbSize = "100%"

    var thumbWidth = thumbSize
    var thumbHeight = thumbSize
    var thumbPadding = "0";

    if (size == "contain") {
        thumbHeight = "auto"
        thumbPadding = "100% 0 0 0"
    }

    const thumbStyle = {
        width: thumbWidth,
        height: thumbHeight,
        padding: thumbPadding,
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