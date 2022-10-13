import React, { useEffect, useState } from 'react';
import db from '../../firebase/firebase';
import { onSnapshot,doc } from 'firebase/firestore';
import Text from '../Text';

const AboutUs = () => {
    const [aboutUsText,setAboutUsText] = useState('')
    const [aboutUsTitle,setAboutUsTitle] = useState('')
    const [link1,setLink1] = useState('')
    const [link2,setLink2] = useState('')
    useEffect(() => 
        onSnapshot(doc(db, "dilekdb", "aboutUs"), (doc) => {
            setAboutUsText(doc.data().aboutUsText)
            setAboutUsTitle(doc.data().aboutUsTitle)
            setLink1(doc.data().link1)
            setLink2(doc.data().link2)
        }), [])

    return (
        <div className='page'>
            <div className='content'>
                <Text subtitle={aboutUsTitle} text={aboutUsText}></Text>       
                <a href={link1}>{link1}</a><br></br>
                <a href={link2}>{link2}</a><br></br>
            </div>
        </div>
    )
};

export default AboutUs;