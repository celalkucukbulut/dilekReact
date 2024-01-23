import React, { useEffect, useState } from 'react';
import db from '../firebase/firebase';
import { onSnapshot, doc } from 'firebase/firestore';
import Text from './Utils/Text';

//#region import images

import instagramImage from '../Images/instagram.png';

//#endregion
const Introduction = () => {

    const [introductionTitle, setIntroductionTitle] = useState('')
    const [introductionText, setIntroductionText] = useState('')
    const [instagram, setInstagram] = useState('')
    const [instagramText, setInstagramText] = useState('')

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
    return (
        <div>
            {introductionTitle || introductionText ?
                <div className='content'>
                    <Text subtitle={introductionTitle} text={introductionText}></Text>
                    {instagram ? <div>
                        <a className="link" rel="noopener noreferrer" target="_blank" href={instagram}><img className='instagramImage'
                            alt='instagram'
                            src={instagramImage}
                        /> {instagramText} </a></div> : null
                    }

                </div>
                : null}
        </div>
    )
};

export default Introduction;