import React from 'react'
import './about.css'
import portfolioimg from "../../Assets/file2.png"
const About = () => {
  return (
    <div className='about' id='About' >
      <div className="mainab">
        <div className="heading">
            <h1 className='h1tag text-dark'>ABOUT ME</h1>
        </div>
        <div className='block2' >

            <div className="imagearea" data-aos="zoom-in" data-aos-duration="1000">
                    <img src={portfolioimg} alt="" />
            </div>

            <div className="textarea">
                <h3 className='th3'>Java Full Stack and Web Developer</h3>
                <p className='tp'>I am a passionate and dedicated Full Stack Web Developer with a robust skill set in both front-end and
                     back-end technologies. My expertise in HTML, CSS, and JavaScript allows me to craft dynamic and responsive web interfaces, 
                     while my proficiency in React enables me to build sophisticated single-page applications with a seamless user experience.
                      On the server side, I leverage my strong knowledge of Java and Spring Boot to develop efficient and scalable back-end solutions. 
                      </p>

                <p className='tp'> Languages & Technologies: Core Java, J2EE (JSP, JDBC, Servlet). <br />
 Scripting Languages: HTML, CSS, JAVASCRIPT. <br />
 Database: Oracle, MY-SQL. <br />
 Frameworks: Spring (Core/IOC, MVC, DAO, REST, Boot), Hibernate, React JS. <br /></p>
            </div>
        </div>
        





      </div>
    </div>
  )
}

export default About