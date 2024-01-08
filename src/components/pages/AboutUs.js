import React, { useEffect, useState } from 'react';
import db from '../../firebase/firebase';
import { onSnapshot, doc } from 'firebase/firestore';
import Text from '../Text';
import Slider from '../Slider';
import ProductImage from '../ProductImage';


import isaret from '../../Images/isaret.jpg';
import isaretTescil from '../../Images/isaretTescil.jpg';
import megep from '../../Images/megep.jpg';
import dilekFanilaVideo from '../../Videos/dilekFanilaVideo.MP4';

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
            <div>
                <video className='video' controls >
                <source src={dilekFanilaVideo} type="video/mp4"/>
            </video>
            </div>
            {showSlider ? <Slider></Slider> : null}
            <div className='content'>
                <Text subtitle={aboutUsTitle} text={aboutUsText}></Text>
                {link1 ? <div><a className="link" rel="noopener noreferrer" target="_blank" href={link1}>{link1}</a><br></br></div> : null}
                {link2 ? <div><a className="link" rel="noopener noreferrer" target="_blank" href={link2}>{link2}</a><br></br></div> : null}
            </div>
            <div className='product'>
                <ProductImage url={isaretTescil} label=""></ProductImage>
                <ProductImage url={megep} label=""></ProductImage>
                <ProductImage url={isaret} label=""></ProductImage>
            </div>
        </div>
    )
};

export default AboutUs;