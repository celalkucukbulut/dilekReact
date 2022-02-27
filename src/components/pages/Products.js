import React from 'react'
import Text from '../Text';
import ProductImage from '../ProductImage';

import allColors from '../../Images/allColors.jpg';
import zeroWomenBlue1 from '../../Images/zero-women-blue-1.jpg';
import halfWomen from '../../Images/half-women.jpg';

const Products = () => {
    const subtitle1 = "DENEME BAŞLIK";
    const text1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! `;
    return (
        <div className='page'>
            <div className='content'>
                <Text subtitle={subtitle1} text={text1}></Text>
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