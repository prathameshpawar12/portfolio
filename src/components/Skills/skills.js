import Css from "../../Assets/css.png"
import Html from "../../Assets/html.png"
import Tailwind from "../../Assets/tailwind.png"
import REact from "../../Assets/react.png"
import Javascript from "../../Assets/javascript.png"
import BOotstrap from "../../Assets/BOotstrap.png"
import Javalogo from "../../Assets/javalogo.png"
import Mysql from "../../Assets/mysql.png"
import nodejslogo from "../../Assets/nodejslogo.png"
import hibernatelogo from "../../Assets/spring-boot-1.webp"
import jdbclogo from "../../Assets/jdbclogo.png"
import mongodblogo from "../../Assets/-mongodb.png"

import React from 'react'
import './skills.css'
const Skills = () => {
  return (
    <div id="Skills">
      <div className="skl">
      <div className="skillsmain">
            <h2 className="section_title">SKILLS</h2>
      
          <div className="maincontainer">
                <div className="frontendcontainer" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h3>Frontend Developer</h3>
      <div className="skills_box">
             
                <div className="skills_data">
                  <img className="skilllogoimg" src={Html} alt="" />
                    <h3 className="skills_name">HTML</h3>
                    {/* <span className="skills_level">Advanced</span> */}
                </div>

                <div className="skills_data">
                  

                  <div>
                  <img  className="skilllogoimg" src={Css} alt="" />
                    <h3 className="skills_name">CSS</h3>
                    {/* <span className="skills_level">Advanced</span> */}
                  </div>
                </div>


            

              
                <div className="skills_data">
                  
                  <div>
                  <img  className="skilllogoimg" src={Javascript} alt="" />
                    <h3 className="skills_name">JavaScript</h3>
                    {/* <span className="skills_level">Intermediate</span> */}
                  </div>
                </div>

                <div className="skills_data">
                  

                  <div>
                    <img  className="skilllogoimg" src={BOotstrap} alt="" />
                    <h3 className="skills_name">BootStrap</h3>
                    {/* <span className="skills_level">Basic</span> */}
                  </div>
                </div>

                
             

              
                <div className="skills_data">
                  

                  <div>
                  <img  className="skilllogoimg" src={REact} alt="" />
                    <h3 className="skills_name">React</h3>
                    {/* <span className="skills_level">Intermediate</span> */}
                  </div>
                </div>

                <div className="skills_data">
                  

                  <div>
                  <img  className="skilllogoimg" src={Tailwind} alt="" />
                    <h3 className="skills_name">Tailwind CSS</h3>
                    {/* <span className="skills_level">Intermediate</span> */}
                  </div>
                </div>

                
              


            </div>
               </div>
           <div className="backendcontainer" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
               <h3 className="backendh3">Backend Developer</h3>
              <div className="skills_box">
             
             <div className="skills_data">
               <img className="skilllogoimg" src={Javalogo} alt="" />
                 <h3 className="skillsname">Java</h3>
             </div>

             <div className="skills_data">
               <div>
               <img  className="skilllogoimg" src={Mysql} alt="" />
                 <h3 className="skillsname">MySQL</h3>
                 
               </div>
             </div>
             <div className="skills_data">
               
               <div>
               <img  className="skilllogoimg" src={nodejslogo} alt="" />
                 <h3 className="skillsname">Nodejs</h3>
                 
               </div>
             </div>

             <div className="skills_data">
               

               <div>
                 <img  className="skilllogoimg" src={hibernatelogo} alt="" />
                 <h3 className="skillsname">Spring Boot</h3>
                
               </div>
             </div>

             <div className="skills_data">
               

               <div>
               <img  className="skilllogoimg" src={jdbclogo} alt="" />
                 <h3 className="skillsname">JDBC</h3>
                
               </div>
             </div>

             <div className="skills_data">
               

               <div>
               <img  className="skilllogoimg" src={mongodblogo} alt="" />
                 <h3 className="skillsname">MongoDB</h3>
                 
               </div>
             </div>

              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Skills