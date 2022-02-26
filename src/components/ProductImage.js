
import React, {useState} from 'react'

const ProductImage = (props) => {
    const [isOpen,setOpen] = useState(false);
    console.log(isOpen)
    return (
        <div className='productImage'>
            <img 
                className='img' 
                onClick={() => setOpen(!isOpen)}
                alt='dilek_fanila' 
                src={props.url} />
            <label className='productImageLabel'>{props.label}</label>
            {isOpen && (
                <dialog
                  className="dialogProduct"
                  open
                  onClick={() => setOpen(!isOpen)}
                >
                  <img 
                    className='dialogImg' 
                    onClick={() => setOpen(!isOpen)}
                    alt='dilek_fanila' 
                    src={props.url}
                  />
                </dialog>
              )}
        </div>
    )
}
export default ProductImage