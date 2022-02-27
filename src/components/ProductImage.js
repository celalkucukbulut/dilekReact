
import React, { useState } from 'react'
import OutsideArea from './OutsideArea';
import { ModalDialog  } from 'react-bootstrap';

const ProductImage = (props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='productImage'>
            <img
                className='img'
                onClick={() => setOpen(!isOpen)}
                alt='dilek_fanila'
                src={props.url} />
            <label className='productImageLabel'>{props.label}</label>
            {isOpen && (
                <OutsideArea runFunction={() => setOpen(!isOpen)}>
                    <ModalDialog  className="dialogProduct" show="true" onClick={() => setOpen(!isOpen)}>
                        <img
                            className='dialogImg'
                            onClick={() => setOpen(!isOpen)}
                            alt='dilek_fanila'
                            src={props.url}
                        />
                    </ModalDialog>
                </OutsideArea>
            )}
        </div>
    )
}
export default ProductImage