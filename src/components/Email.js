import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'

const Email = () => {
    const form = useRef();
    const [resultMessage, setResultMessage] = useState('');
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_USER_ID)
            .then((result) => {
                setResultMessage('Mesajınız başarıyla iletildi.');
            }, (error) => {
                setResultMessage('Mesajınız iletilemedi. Lütfen telefon ile arayınız.');
            });
        form.current.reset();
    };

    return (
        <div className='content'>
            <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                    <div className="form-group col-lg-4">
                        <label>İsim Soyisim</label>
                        <input type="text" className="form-control" name="from_name" />
                    </div>
                    <div className="form-group col-lg-4">
                        <label>eMail Adresi</label>
                        <input type="email" className="form-control" placeholder="kisi@abc.com" name="reply_to" />
                    </div>
                    <div className="form-group col-lg-4">
                        <label>Telefon Numarası</label>
                        <input type='text' className="form-control" name="phone" placeholder="05XXXXXXXXX" maxLength="11" />
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group col-lg-12">
                        <label>Mesajınız</label>
                        <textarea className="form-control" rows="6" placeholder="Mesajınızı buraya yazabilirsiniz." name="message"></textarea>
                    </div>
                    <div className="form-group col-lg-12">
                        <input className="btn btn-outline-info btn-lg" style={{margin : "5px 10px 0 0", float:"right"}} type="submit" value="Gönder" />
                    </div>
                </div>
                {resultMessage && <label style={{marginTop : "5px"}}>{resultMessage}</label>}
            </form>
        </div>
    );
};

export default Email;