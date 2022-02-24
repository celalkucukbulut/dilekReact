import React from 'react'

const Text = (props) => {
  return (
    <div>
        <h2 className="subtitle">{props.subtitle}</h2>
        <p className="text">{props.text}</p>
    </div>
  )
}

export default Text
