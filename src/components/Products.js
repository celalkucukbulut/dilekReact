import React, { useEffect, useState } from 'react';
import db from '../firebase/firestore';
import storage from '../firebase/storage';
import { onSnapshot, doc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import Text from './Utils/Text';
import ProductImage from './Utils/ProductImage';

//#endregion
const Products = () => {

    const [productsText, setProductsText] = useState('')
    const [productsTitle, setProductsTitle] = useState('')
    const [productImages, setProductImages] = useState({});

    const productImagePaths = [
        { id: "101", path: "dilekImages/101.jpg" },
        { id: "102", path: "dilekImages/102.jpg" },
        { id: "103", path: "dilekImages/103.jpg" },
        { id: "104", path: "dilekImages/104.jpg" },
        { id: "105", path: "dilekImages/105.jpg" },
        { id: "106", path: "dilekImages/106.jpg" },
        { id: "107", path: "dilekImages/107.jpg" },
        { id: "108", path: "dilekImages/108.jpg" },
        { id: "109", path: "dilekImages/109.jpg" },
        { id: "110", path: "dilekImages/110.jpg" },
        { id: "111", path: "dilekImages/111.jpg" },
        { id: "112", path: "dilekImages/112.jpg" },
        { id: "113", path: "dilekImages/113.jpg" },
        { id: "114", path: "dilekImages/114.jpg" },
        { id: "115", path: "dilekImages/115.jpg" },
        { id: "121", path: "dilekImages/121.jpg" },
        { id: "141", path: "dilekImages/141.jpg" },
        { id: "201", path: "dilekImages/201.jpg" },
        { id: "221", path: "dilekImages/221.jpg" },
        { id: "241", path: "dilekImages/241.jpg" },
        { id: "301", path: "dilekImages/301.jpg" },
        { id: "302", path: "dilekImages/302.jpg" },
        // Diğer yolları ekleyin
    ];

    const fetchImageUrl = async (path) => {
        try {
          const imageRef = ref(storage, path);
          const url = await getDownloadURL(imageRef);
          return url;
        } catch (error) {
          console.error('Error fetching image URL:', error);
        }
      };
      

      useEffect(() => {
          const fetchImages = async () => {
              try {
                  const images = await Promise.all(
                      productImagePaths.map(async ({ id, path }) => {
                          const url = await fetchImageUrl(path);
                          return { id, url };
                      })
                  );
                  const imageMap = images.reduce((acc, { id, url }) => {
                      acc[id] = url;
                      return acc;
                  }, {});
                  console.log(imageMap)
                  setProductImages(imageMap);
              } catch (error) {
                  console.error("Error fetching images:", error);
              }
          };
      
          fetchImages();
      }, []);
      


    useEffect(() =>
        onSnapshot(doc(db, "dilekdb", "products"), (doc) => {
            setProductsText(doc.data().productsText)
            setProductsTitle(doc.data().productsTitle)
        }), [])
    return (
        <div className='content'>
            {productsTitle || productsText ?
                <div>
                    <Text subtitle={productsTitle} text={productsText}></Text>
                </div>
                : null
            }
            <div className='content'>
                <h2>KADIN</h2>
            </div>

            <div className='product'>
                <ProductImage url={productImages[101]} label="101"></ProductImage>
                <ProductImage url={productImages[102]} label="102"></ProductImage>
                <ProductImage url={productImages[103]} label="103"></ProductImage>
            </div>
            <div className='product'>
                <ProductImage url={productImages[104]} label="104"></ProductImage>
                <ProductImage url={productImages[105]} label="105"></ProductImage>
                <ProductImage url={productImages[106]} label="106"></ProductImage>
            </div>
            <div className='product'>
                <ProductImage url={productImages[107]} label="107"></ProductImage>
                <ProductImage url={productImages[108]} label="108"></ProductImage>
                <ProductImage url={productImages[109]} label="109"></ProductImage>
            </div>
            <div className='product'>
                <ProductImage url={productImages[110]} label="110"></ProductImage>
                <ProductImage url={productImages[111]} label="111"></ProductImage>
                <ProductImage url={productImages[112]} label="112"></ProductImage>
            </div>
            <div className='product'>
                <ProductImage url={productImages[113]} label="113"></ProductImage>
                <ProductImage url={productImages[114]} label="114"></ProductImage>
                <ProductImage url={productImages[115]} label="115"></ProductImage>
            </div>
            <div className='product'>
                <ProductImage url={productImages[121]} label="121"></ProductImage>
                <ProductImage url={productImages[141]} label="141"></ProductImage>
            </div>
            <div className='content'>
                <h2>ERKEK</h2>
            </div>
            <div className='product'>
                <ProductImage url={productImages[201]} label="201"></ProductImage>
                <ProductImage url={productImages[221]} label="221"></ProductImage>
                <ProductImage url={productImages[241]} label="241"></ProductImage>
            </div>
            <div className='product'>
                <ProductImage url={productImages[301]} label="301"></ProductImage>
                <ProductImage url={productImages[302]} label="302"></ProductImage>
            </div>
        </div>
    )
};

export default Products;