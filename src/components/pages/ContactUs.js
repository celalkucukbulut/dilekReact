import React from 'react'
import Title from '../Title';
import Text from '../Text';
import Iframe from 'react-iframe'

const ContactUs = () => {
    const subtitle1 = "DENEME BAŞLIK";
    const text1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  optio, eaque rerum! `;
    return (
        <div className='page'>
            <div className='content'>
                <Text subtitle={subtitle1} text={text1}></Text>
                <h3><strong>Telefon : </strong> 05987654321</h3>
                <h3><strong>Adres : </strong>Hepkebirler Mahallesi Münire Medresesi El Sanatları Çarşısı No:15, 37100 Kastamonu Merkez/Kastamonu</h3>
                <h3><strong>Email : </strong>dilekfanila@gmail.com</h3>
            </div>
            <div style={{ padding: "10px" }}>
                <Iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com.tr/maps/embed?pb=!1m18!1m12!1m3!1d2993.911861751808!2d33.77270911567037!3d41.37599960466348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4084fa0ec3a36405%3A0xdd31083202875f76!2sDilek%20Fanila!5e0!3m2!1str!2str!4v1645357903238!5m2!1str!2str"></Iframe>
            </div>
        </div>
    )
};

export default ContactUs;