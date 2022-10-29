import React from 'react';

const Text = (props) => {
  return (
    <div>
        {props.subtitle ? <h1 className="subtitle">{props.subtitle}</h1> : null }
        {props.text ? <p className="text">{props.text}</p> : null }
    </div>
  )
}

export default Text
