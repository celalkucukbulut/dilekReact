import React, { useEffect, useState } from 'react'
import db from '../../firebase/firebase';
import Slider from '../Slider';
import Text from '../Text';
import { onSnapshot,doc } from 'firebase/firestore';

const Home = () => {
    const [homeText,setHomeText] = useState('')
    const [homeTitle,setHomeTitle] = useState('')
    useEffect(() => 
        onSnapshot(doc(db, "dilekdb", "home"), (doc) => {
            setHomeText(doc.data().homeText)
            setHomeTitle(doc.data().homeTitle)
        }), [])
    return (
        <div className='page'>

            <Slider></Slider>
            <div className='content'>
                <Text subtitle={homeTitle} text={homeText}></Text>
            </div>
        </div>
    )
};

export default Home;