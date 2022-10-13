import React, { useEffect, useState } from 'react';
import db from '../../firebase/firebase';
import { onSnapshot,doc } from 'firebase/firestore';
import Text from '../Text';
import Iframe from 'react-iframe';
import Email from '../Email';

const ContactUs = () => {
    const [contactUsText, setContactUsText] = useState('')
    const [contactUsTitle,setContactUsTitle] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [email,setEmail] = useState('')
    const [googlePin,setGooglePin] = useState('')

    useEffect(() => 
        onSnapshot(doc(db, "dilekdb", "contactUs"), (doc) => {
            setContactUsText(doc.data().contactUsText)
            setContactUsTitle(doc.data().contactUsTitle)
            setPhone(doc.data().phone)
            setAddress(doc.data().address)
            setEmail(doc.data().email)
            setGooglePin(doc.data().googlePin)
        }), [])

    return (
        <div className='page'>
            <div className='content'>
                <Text subtitle={contactUsTitle} text={contactUsText}></Text>
                {phone ? <h3><strong>Telefon : </strong> {phone}</h3> : null}
                {address ? <h3><strong>Adres : </strong>{address}</h3> : null}
                {email ? <h3><strong>Email : </strong>{email}</h3> : null}
            </div>
            <div style={{ padding: "10px" }}>
                <Iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={googlePin}></Iframe>
            </div>
            <Email></Email>
        </div>
    )
};

export default ContactUs;