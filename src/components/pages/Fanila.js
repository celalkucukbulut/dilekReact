import React, { useEffect, useState } from 'react';
import db from '../../firebase/firebase';
import Text from '../Text';
import { onSnapshot,doc } from 'firebase/firestore';

const Fanila = () => {
    const [fanilaText,setFanilaText] = useState('')
    const [fanilaTitle,setFanilaTitle] = useState('')
    useEffect(() => 
        onSnapshot(doc(db, "dilekdb", "fanila"), (doc) => {
            setFanilaText(doc.data().fanilaText)
            setFanilaTitle(doc.data().fanilaTitle)
        }), [])
    return (
        <div className='page'>
            <div className='content'>
                <Text subtitle={fanilaTitle} text={fanilaText}></Text>
            </div>
        </div>
    )
};

export default Fanila;