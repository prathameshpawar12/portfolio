import { useState, useEffect } from "react";
import prathamphotobgremove from "../../Assets/file.png"
import { Link } from "react-scroll";
import React from 'react'
import './intro.css';
const Intro = () => {
  const [loopNum, setLoopNum]= useState(0);
  const [isDeleting, setIsDeleting]= useState(false);
  const toRotate= ["Web Developer", "Full Stack Developer", "Java Developer"];
  const [text, setText]= useState('');
  const period= 300;
  const [delta, setDelta]= useState(300- Math.random()*100)

    useEffect(()=>{
      let ticker= setInterval(()=>{
          tick();
      },delta)
      return ()=>{
        clearInterval(ticker)};
    }, [text])

      const tick= ()=>{
          let i= loopNum % toRotate.length;
          let fullText= toRotate[i];
          let updatedText= isDeleting? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
          setText(updatedText);
          if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
          }
          if(!isDeleting && updatedText=== fullText){
            setIsDeleting(true);
            setDelta(period);

          }else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(50);
          }
      }
  return (
    <div className='maincont' id="Home">
      <div className='textdiv' data-aos="fade-up-right" data-aos-duration="1000">
        <div className="innertextdiv">
          <div className="bigtext">
                  <h3>Hi, I am</h3>
                  <h2 className="bh2">Prathamesh Shantaram Pawar</h2>
                  <h3>I am a  <span>{text}</span></h3>
          </div>
        <p>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for 
          learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset,
           I am ready to make a meaningful contribution and achieve great things.</p>
        <div className="iconsbanner">
            <span className="sp">
              <a href="https://www.linkedin.com/in/prathamesh-pawar-47b841234/">
                <i class="fa-brands fa-linkedin-in"></i>
                </a>
            </span >
            <span className="sp">
              <a href="https://www.facebook.com/prathamesh.pawar.58760">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </span>

            <span  className="sp">
            <a href="https://www.instagram.com/pratham_96km/">
            <i class="fa-brands fa-instagram"></i>
            </a>
            </span>

            <span className="sp">
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXDztFvTqNqQGsgbLvshfjhkHPhNdszKbBFDrHgxSljzjGbFTHMqclsmFdgnbjRnjTwxB">
            <i class="fa-solid fa-envelope"></i>
            </a>
            </span>
        </div>
        
        <Link spy={true} to='Contact'>
        <a className="contactme" >Contact Me</a>
           </Link>
        </div>
      </div>
      <div className='bannerimage'  data-aos="fade-up-left" data-aos-duration="1000">
        <img className="bgimg" src={prathamphotobgremove} alt="" />
      </div>
    </div>
  )
}

export default Intro