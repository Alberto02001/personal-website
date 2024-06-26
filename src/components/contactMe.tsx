import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Modal } from 'react-bootstrap';
import { Animate } from '../animation';
import { useTranslation } from 'react-i18next';

const ContactMe = () =>{  
    const {t} = useTranslation()

    const [show, setShow] = useState(false);

    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);

    const form = useRef();

    const sendEmail = (e: any) => {
      e.preventDefault();
  
      // @ts-ignore
      emailjs.sendForm('service_bu6xor7', 'template_n5781p8', form.current, '8yAkRGjksM7gOParV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const checkName = () =>{
        if ((document.getElementById("name") as HTMLInputElement)?.value.length > 0){
            setName(true)
        }   
        else{
            setName(false)
        }          
    }

    const checkEmail = () =>{
        if ((document.getElementById("email") as HTMLInputElement)?.value.length > 0){
            setEmail(true)
        }   
        else{
            setEmail(false)
        }          
    }

    const checkValidity = () =>{
        const formContent = (document.getElementById("form") as HTMLInputElement);
        if (formContent.checkValidity()){
            setShow(true)
        }   
        else{
            setShow(false)
        }          
    }

    const resetForm = () =>{
        const formContent = (document.getElementById("form") as HTMLInputElement);
        // @ts-ignore
        formContent.reset()             
        checkName()
        checkEmail()
        setShow(false)
        
    }

    return (
        <>
            <a id="contact"></a>
            <div className="d-flex flex-column flex-md-row contactBack">
                <div className="contactBox1 d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column align-items-start col-10 col-md-8 col-lg-7 mt-5 mt-md-0">
                        <Animate.FadeUp>
                            <p className="contactLabel mt-4 mt-md-0">{t("contact.contactLabel")}</p>
                        </Animate.FadeUp>
                        <Animate.FadeUp>
                            <p className="contactTitle">{t("contact.contactTitle")}</p>
                        </Animate.FadeUp>
                        <Animate.FadeUp>
                            <p className="contactDescription">{t("contact.contactDescription")}</p>
                        </Animate.FadeUp>
                        <Animate.FadeIn>
                            <a className="emailLink d-flex" href="mailto: albertosoldiviero@gmail.com">
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 88.86"><title>email</title><path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z"/></svg>
                                <p>{t("contact.myEmail")}</p>
                            </a>
                        </Animate.FadeIn>
                    </div>
                </div>
                
                <form className="contactBox2 d-flex flex-column justify-content-center" id='form' autoComplete="off" ref={form as any} onSubmit={sendEmail}>
                        <Animate.FadeUp>
                            <div className='d-flex flex-column col-11 col-lg-9'>                           
                                <label className="myLabel" htmlFor="name">{t("contact.nameLabel")}</label>
                                <input type="text"
                                id="name"
                                name="user_name"
                                onChange={checkName}
                                className={`myForm emailForm ${name === true ? "nameValid" : "nameNotValid"}`}
                                required/>                           
                            </div>
                        </Animate.FadeUp>

                        <Animate.FadeUp>
                            <div className='d-flex flex-column col-11 col-lg-9'> 
                                <label className="myLabel" htmlFor="email">{t("contact.emailLabel")}</label>
                                <input type="email"
                                id="email"
                                name="user_email"
                                onChange={checkEmail}
                                className={`myForm emailForm ${email === true ? "emailValid" : "emailNotValid"}`}
                                required/>
                            </div>
                        </Animate.FadeUp>
                            
                        <Animate.FadeUp>
                            <div className='d-flex flex-column mt-3 col-11 col-lg-9'> 
                                <label className="myLabel" htmlFor="message">{t("contact.messageLabel")}</label>
                                <textarea id="message"
                                name="message"
                                className="myForm"
                                required/>
                            </div>
                        </Animate.FadeUp>
                        <div className='mt-5 mb-5 mb-md-0 align-self-center align-self-md-start'>
                        <Animate.FadeUp>
                            <input className="sendButton bg-dark" type="submit" value={t("contact.buttonLabel") as string} onClick={checkValidity} />                       
                        </Animate.FadeUp>
                        </div>
                </form>
            </div> 

            <Modal show={show} onHide={() => setShow(false)}>
                <div className='d-flex justify-content-center p-3 mt-3'>
                    <Modal.Title>{t("contact.modalText")}</Modal.Title>
                </div>
                <div className='d-flex justify-content-center p-3 mb-3'>
                    <button className='closeModalButton' onClick={resetForm}>{t("contact.modalButton")}</button>
                </div>
            </Modal>

        </>
    )
}

export default ContactMe;
