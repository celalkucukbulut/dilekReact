import React, { useEffect, useState } from 'react'
import db from '../../firebase/firebase';
import { onSnapshot,doc } from 'firebase/firestore';
import Text from '../Text';
import ProductImage from '../ProductImage';

//#region import images

import image_101B from '../../Images/101B.jpg';
import image_101K from '../../Images/101K.jpg';
import image_101S from '../../Images/101S.jpg';
import image_102 from '../../Images/102.jpg';
import image_103B from '../../Images/103B.jpg';
import image_103S from '../../Images/103S.jpg';
import image_104 from '../../Images/104.jpg';
import image_111 from '../../Images/111.jpg';
import image_121 from '../../Images/121.jpg';
import image_201 from '../../Images/201.jpg';
import image_211 from '../../Images/211.jpg';
import image_221 from '../../Images/221.jpg';
import image_301 from '../../Images/301.jpg';
import image_302 from '../../Images/302.jpg';

//#endregion


const Products = () => {
    
    const [productsText ,setProductsText] = useState('')
    const [productsTitle,setProductsTitle] = useState('')
    useEffect(() => 
        onSnapshot(doc(db, "dilekdb", "products"), (doc) => {
            setProductsText(doc.data().productsText)
            setProductsTitle(doc.data().productsTitle)
        }), [])

    return (
        <div className='page'>
            <div className='content'>
                <Text subtitle={productsTitle} text={productsText}></Text>
            </div>
            <div className='content'>
                <label>KADIN</label>
            </div>
            <div className='product'>
                <ProductImage url={image_101B} label="101"></ProductImage>
                <ProductImage url={image_101K} label="101"></ProductImage>
                <ProductImage url={image_101S} label="101"></ProductImage>
            </div>
            <div className='product'>
                <ProductImage url={image_102} label="102"></ProductImage>
                <ProductImage url={image_103B} label="103"></ProductImage>
                <ProductImage url={image_103S} label="103"></ProductImage>
            </div>
            <div className='product'>
                <ProductImage url={image_104} label="104"></ProductImage>
                <ProductImage url={image_111} label="111"></ProductImage>
                <ProductImage url={image_121} label="121"></ProductImage>
            </div>
            <div className='content'>
                <label>ERKEK</label>
            </div>
            <div className='product'>
                <ProductImage url={image_201} label="201"></ProductImage>
                <ProductImage url={image_211} label="211"></ProductImage>
                <ProductImage url={image_221} label="221"></ProductImage>
            </div>
            <div className='content'>
                <label>DİĞER</label>
            </div>
            <div className='product'>
                <ProductImage url={image_301} label="301"></ProductImage>
                <ProductImage url={image_302} label="302"></ProductImage>
            </div>
        </div>
    )
};

export default Products;