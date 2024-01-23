import React, { useEffect, useState } from 'react';
import db from '../../firebase/firebase';
import Text from '../Utils/Text';
import { onSnapshot,doc } from 'firebase/firestore';

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
                Kaynak : <a className="link" rel="noopener noreferrer" target="_blank" href={link1}>{link1}</a><br></br>
            </div>
        </div>
    )
};

export default Fanila;