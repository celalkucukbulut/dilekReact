import React, { useEffect, useState } from 'react';
import db from '../../firebase/firebase';
import { onSnapshot,doc } from 'firebase/firestore';
import Text from '../Text';

const AboutUs = () => {
    const [aboutUsText,setAboutUsText] = useState('')
    const [aboutUsTitle,setAboutUsTitle] = useState('')
    useEffect(() => 
        onSnapshot(doc(db, "dilekdb", "aboutUs"), (doc) => {
            setAboutUsText(doc.data().aboutUsText)
            setAboutUsTitle(doc.data().aboutUsTitle)
        }), [])

    return (
        <div className='page'>
            <div className='content'>
                <Text subtitle={aboutUsTitle} text={aboutUsText}></Text>
            </div>
        </div>
    )
};

export default AboutUs;