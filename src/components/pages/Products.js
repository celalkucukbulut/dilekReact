import React, { useEffect, useState } from 'react'
import db from '../../firebase/firebase';
import { onSnapshot,doc } from 'firebase/firestore';
import Text from '../Text';
import ProductImage from '../ProductImage';

//#region import images
import allColors from '../../Images/allColors.jpg';
import zeroWomenBlue1 from '../../Images/zero-women-blue-1.jpg';
import halfWomen from '../../Images/half-women.jpg';

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
                <ProductImage url={allColors} label="TÜM RENKLER"></ProductImage>
                <ProductImage url={zeroWomenBlue1} label="KOLSUZ DANTELLİ"></ProductImage>
                <ProductImage url={halfWomen} label="YARIM KOL"></ProductImage>
            </div>
            <div className='product'>
                <ProductImage url={allColors} label="TÜM RENKLER"></ProductImage>
                <ProductImage url={zeroWomenBlue1} label="KOLSUZ DANTELLİ"></ProductImage>
                <ProductImage url={halfWomen} label="YARIM KOL"></ProductImage>
            </div>
            <div className='content'>
                <label>ERKEK</label>
            </div>
            <div className='product'>
                <ProductImage url={allColors} label="TÜM RENKLER"></ProductImage>
                <ProductImage url={zeroWomenBlue1} label="KOLSUZ DANTELLİ"></ProductImage>
                <ProductImage url={halfWomen} label="YARIM KOL"></ProductImage>
            </div>
            <div className='content'>
                <label>DİĞER</label>
            </div>
            <div className='product'>
                <ProductImage url={allColors} label="TÜM RENKLER"></ProductImage>
                <ProductImage url={zeroWomenBlue1} label="KOLSUZ DANTELLİ"></ProductImage>
                <ProductImage url={halfWomen} label="YARIM KOL"></ProductImage>
            </div>
        </div>
    )
};

export default Products;