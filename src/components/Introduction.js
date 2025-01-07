import React, { useEffect, useState } from 'react';
import db from '../firebase/firestore';
import storage from '../firebase/storage';
import { onSnapshot, doc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import Text from './Utils/Text';

//#endregion
const Introduction = () => {

    const [introductionTitle, setIntroductionTitle] = useState('')
    const [introductionText, setIntroductionText] = useState('')
    const [instagram, setInstagram] = useState('')
    const [instagramText, setInstagramText] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [whatsappTemplate, setWhatsappTemplate] = useState('')
    const [whatsappText, setWhatsappText] = useState('')
    const [whatsappImageUrl, setWhatsappImageUrl] = useState('');
    const [instagramImageUrl, setInstagramImageUrl] = useState('');

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
                const whatsappUrl = await fetchImageUrl('dilekImages/whatsapp.png');
                const instagramUrl = await fetchImageUrl('dilekImages/instagram.png');
                setWhatsappImageUrl(whatsappUrl);
                setInstagramImageUrl(instagramUrl);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
    
        fetchImages();
    }, []);

    useEffect(() =>
        onSnapshot(doc(db, "dilekdb", "introduction"), (doc) => {
            setIntroductionTitle(doc.data().introductionTitle)
            setIntroductionText(doc.data().introductionText)
        }), [])
    useEffect(() =>
        onSnapshot(doc(db, "dilekdb", "contactUs"), (doc) => {
            setInstagram(doc.data().instagram)
            setInstagramText(doc.data().instagramText)
        }), [])
    useEffect(() =>
        onSnapshot(doc(db, "dilekdb", "contactUs"), (doc) => {
            setWhatsapp(doc.data().whatsapp)
            setWhatsappTemplate(doc.data().whatsappTemplate)
            setWhatsappText(doc.data().whatsappText)
        }), [])
    return (
        <div>
            {introductionTitle || introductionText ?
                <div className='content'>
                    <Text subtitle={introductionTitle} text={introductionText}></Text>
                    {whatsapp ? <div>
                        <a className="link" rel="noopener noreferrer" target="_blank" href={whatsapp+encodeURIComponent(whatsappTemplate)}><img className='iconImage'
                            alt='whatsapp'
                            src={whatsappImageUrl}
                        /> {whatsappText} </a></div> : null
                    }
                    {instagram ? <div>
                        <a className="link" rel="noopener noreferrer" target="_blank" href={instagram}><img className='iconImage'
                            alt='instagram'
                            src={instagramImageUrl}
                        /> {instagramText} </a></div> : null
                    }

                </div>
                : null}
        </div>
    )
};

export default Introduction;