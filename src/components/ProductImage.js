import React from 'react'

const ProductImage = (props) => {
    return (
        <div className='productImage'>
            <img className='img' alt='dilek_fanila' src={props.url}></img>
            <label className='productImageLabel'>{props.label}</label>
        </div>
    )
}
export default ProductImage