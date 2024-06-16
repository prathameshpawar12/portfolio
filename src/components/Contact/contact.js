import React,{useState, useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_mwosgda', 'template_hwr1l0f', formRef.current, {
            publicKey: 'a0ClkToXFscDZU3rs',
          })
          .then(
            (result) => {
             setSuccess(true)
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  const [errMsg, setErrMsg] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div id='Contact' >
        <div className="mai" >
         <div className="heading">CONTACT</div>
            <div className="inner">
                <h3 className='inh3'>Please fill out the form below to discuss any work opportunities.</h3>
                <div className="con" >

                        <div className="contactcontent" >
                            
                            <form ref={formRef} action=""  className="ip" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" onSubmit={sendEmail}>
                                
                                <input type="text" name="name" placeholder='Your Name' className='ipbg' /><br /><br />
                                <input type="email" name="email" placeholder='Your Email' className='ipbg' /><br /><br />
                                <textarea type="text" name="message" placeholder='Your Massage' rows="5" className='ipbg' /><br /><br />
                                <button type='submit'  value="Send" className='submitbtn'>Submit</button>
                                {errMsg && <p style={{color:"red"}}>{"Error"}</p>}
                                {success && <p style={{color:"green"}}>{"Message sent successfully"}</p>}
                            </form>
                       
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact