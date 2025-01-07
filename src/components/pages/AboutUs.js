import React, { useEffect, useState } from 'react';
import db from '../../firebase/firestore';
import storage from '../../firebase/storage';
import { onSnapshot, doc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import Text from '../Utils/Text';
import Slider from '../Utils/Slider';
import ProductImage from '../Utils/ProductImage';

import isaret from '../../Images/isaret.jpg';
import isaretTescil from '../../Images/isaretTescil.jpg';
import megep from '../../Images/megep.jpg';

//#endregion

const AboutUs = () => {
    const [aboutUsText, setAboutUsText] = useState('')
    const [aboutUsTitle, setAboutUsTitle] = useState('')
    const [link1, setLink1] = useState('')
    const [link2, setLink2] = useState('')
    const [showSlider, setShowSlider] = useState('')
    const [dilekFanilaVideoUrl, setDilekFanilaVideoUrl] = useState('');
    
    const fetchVideoUrl = async (path) => {
        try {
          const videoRef = ref(storage, path);
          const url = await getDownloadURL(videoRef);
          return url;
        } catch (error) {
          console.error('Error fetching image URL:', error);
        }
      };
      
      useEffect(() => {
        const fetchVideo = async () => {
            try {
                const videoUrl = await fetchVideoUrl('dilekVideos/dilekFanilaVideo.MP4');
                setDilekFanilaVideoUrl(videoUrl);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
    
        fetchVideo();
    }, []);


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
            {dilekFanilaVideoUrl ? 
                <div>
                    <video className='video' controls loading="lazy">
                        <source src={dilekFanilaVideoUrl} type="video/mp4"/>
                    </video>
                </div> : null}
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