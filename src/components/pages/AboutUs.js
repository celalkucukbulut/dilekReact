import React, { useEffect, useState } from 'react';
import db from '../../firebase/firebase';
import { onSnapshot, doc } from 'firebase/firestore';
import Text from '../Text';
import Slider from '../Slider';
import ProductImage from '../ProductImage';

//#region  import images
import image_1 from '../../Images/1.jpg';
import image_2 from '../../Images/2.jpg';
import image_3 from '../../Images/3.jpg';

//#endregion

const AboutUs = () => {
    const [aboutUsText, setAboutUsText] = useState('')
    const [aboutUsTitle, setAboutUsTitle] = useState('')
    const [link1, setLink1] = useState('')
    const [link2, setLink2] = useState('')
    const [showSlider, setShowSlider] = useState('')
    useEffect(() =>
        onSnapshot(doc(db, "dilekdb", "aboutUs"), (doc) => {
            setAboutUsText(doc.data().aboutUsText)
            setAboutUsTitle(doc.data().aboutUsTitle)
            setLink1(doc.data().link1)
            setLink2(doc.data().link2)
            setShowSlider(doc.data().showSlider)
        }), [])

    return (
        <div className='page'>
            {showSlider ? <Slider></Slider> : null}
            <div className='content'>
                <Text subtitle={aboutUsTitle} text={aboutUsText}></Text>
                {link1 ? <div><a class="link" rel="noopener noreferrer" target="_blank" href={link1}>Fanila, benim sayemde tanındı</a><br></br></div> : null}
                {link2 ? <div><a class="link" rel="noopener noreferrer" target="_blank" href={link2}>Uluslararası festivalde Kastamonu’yu tanıtacaklar</a><br></br></div> : null}
            </div>
            <div className='product'>
                <ProductImage url={image_1} label=""></ProductImage>
                <ProductImage url={image_3} label=""></ProductImage>
                <ProductImage url={image_2} label=""></ProductImage>
            </div>
        </div>
    )
};

export default AboutUs;