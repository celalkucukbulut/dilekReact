import React, { useState } from 'react';
import OutsideArea from './OutsideArea';
import { ModalDialog } from 'react-bootstrap';

const ProductImage = (props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='productImage'>
            <div>
                <img
                    className='img'
                    onClick={() => setOpen(!isOpen)}
                    alt='dilek_fanila'
                    src={props.url} />
                <h3 className='productImageLabel'>{props.label}</h3>
            </div>
            {isOpen && (
                <OutsideArea runFunction={() => setOpen(!isOpen)}>
                    <ModalDialog className="dialogProduct" show="true" onClick={() => setOpen(!isOpen)}>
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