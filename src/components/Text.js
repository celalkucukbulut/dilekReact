import React from 'react';

const Text = (props) => {
  return (
    <div>
        {props.subtitle ? <h1 className="subtitle">{props.subtitle}</h1> : null }
        {props.text ? <div> {props.text.split('\\n').map(i=><p key={i} className="text">{i}</p>) } </div>: null }
    </div>
  )
}

export default Text
