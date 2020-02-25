import React from 'react'

const Message = ({ isError = true, message }) => {
    const style = isError && { color: 'red' }

    return <p style={style}>{message}</p>
}

export default Message 