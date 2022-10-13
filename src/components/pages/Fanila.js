import React, { useEffect, useState } from 'react';
import db from '../../firebase/firebase';
import Text from '../Text';
import { onSnapshot,doc,collection } from 'firebase/firestore';

const Fanila = () => {
    const [fanilaText,setFanilaText] = useState('')
    const [fanilaTitle,setFanilaTitle] = useState('')
    const [link1,setLink1] = useState('')
    useEffect(() => 
        onSnapshot(doc(db, "dilekdb", "fanila"), (doc) => {
            setFanilaText(doc.data().fanilaText)
            setFanilaTitle(doc.data().fanilaTitle)
            setLink1(doc.data().link1)
        }), [])
    return (
        <div className='page'>
            <div className='content'>
                <Text subtitle={fanilaTitle} text={fanilaText}></Text>
                <a class="link" rel="noopener noreferrer" target="_blank" href={link1}>Fanilacılık</a><br></br>
            </div>
        </div>
    )
};

export default Fanila;