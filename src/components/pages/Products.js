import React, { useEffect, useState } from 'react'
import db from '../../firebase/firebase';
import { onSnapshot, doc } from 'firebase/firestore';
import Text from '../Text';
import ProductImage from '../ProductImage';

//#region import images

import image_101 from '../../Images/101.jpg';
import image_102 from '../../Images/102.jpg';
import image_103 from '../../Images/103.jpg';
import image_104 from '../../Images/104.jpg';
import image_105 from '../../Images/105.jpg';
import image_106 from '../../Images/106.jpg';
import image_107 from '../../Images/107.jpg';
import image_108 from '../../Images/108.jpg';
import image_109 from '../../Images/109.jpg';
import image_110 from '../../Images/110.jpg';
import image_111 from '../../Images/111.jpg';
import image_112 from '../../Images/112.jpg';
import image_113 from '../../Images/113.jpg';
import image_114 from '../../Images/114.jpg';
import image_115 from '../../Images/115.jpg';
import image_121 from '../../Images/121.jpg';
import image_141 from '../../Images/141.jpg';
import image_201 from '../../Images/201.jpg';
import image_221 from '../../Images/221.jpg';
import image_241 from '../../Images/241.jpg';
import image_301 from '../../Images/301.jpg';
import image_302 from '../../Images/302.jpg';

//#endregion
const Products = () => {

    const [productsText, setProductsText] = useState('')
    const [productsTitle, setProductsTitle] = useState('')
    useEffect(() =>
        onSnapshot(doc(db, "dilekdb", "products"), (doc) => {
            setProductsText(doc.data().productsText)
            setProductsTitle(doc.data().productsTitle)
        }), [])

    return (
        <div>
            {productsTitle || productsText ?
                <div className='content'>
                    <Text subtitle={productsTitle} text={productsText}></Text>
                </div>
                : null}
            <div className='content'>
                <label>KADIN</label>
            </div>
            <div className='product'>
                <ProductImage url={image_101} label="101"></ProductImage>
                <ProductImage url={image_102} label="102"></ProductImage>
                <ProductImage url={image_103} label="103"></ProductImage>
            </div>
            <div className='product'>
                <ProductImage url={image_104} label="104"></ProductImage>
                <ProductImage url={image_105} label="105"></ProductImage>
                <ProductImage url={image_106} label="106"></ProductImage>
            </div>
            <div className='product'>
                <ProductImage url={image_107} label="107"></ProductImage>
                <ProductImage url={image_108} label="108"></ProductImage>
                <ProductImage url={image_109} label="109"></ProductImage>
            </div>
            <div className='product'>
                <ProductImage url={image_110} label="110"></ProductImage>
                <ProductImage url={image_111} label="111"></ProductImage>
                <ProductImage url={image_112} label="112"></ProductImage>
            </div>
            <div className='product'>
                <ProductImage url={image_113} label="113"></ProductImage>
                <ProductImage url={image_114} label="114"></ProductImage>
                <ProductImage url={image_115} label="115"></ProductImage>
            </div>
            <div className='product'>
                <ProductImage url={image_121} label="121"></ProductImage>
                <ProductImage url={image_141} label="141"></ProductImage>
            </div>
            <div className='content'>
                <label>ERKEK</label>
            </div>
            <div className='product'>
                <ProductImage url={image_201} label="201"></ProductImage>
                <ProductImage url={image_221} label="221"></ProductImage>
                <ProductImage url={image_241} label="241"></ProductImage>
            </div>
            <div className='product'>
                <ProductImage url={image_301} label="301"></ProductImage>
                <ProductImage url={image_302} label="302"></ProductImage>
            </div>
        </div>
    )
};

export default Products;