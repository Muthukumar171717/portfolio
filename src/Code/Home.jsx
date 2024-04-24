import React from 'react'
import Code from './round.png'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaBootstrap } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

function Home() {
  return (
    <section className='container-fluid'>

        <div className='sticky-top'>
            <nav class="navbar position-sticky bg-black border-bottom border-body "  style={{ top: '20px' }} data-bs-theme="dark">
                <div class="container-fluid">
                    <div>
                    <a class="navbar-brand ms-5 " href="#">Navbar</a>
                    </div>
                
                    <div className='Nav_Navbar'>
                        <ul class="nav nav-underline ">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#aboutme">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#skill">Skill</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#experience">Experience</a>
                            </li>
                        </ul>
                    </div>

                </div>
    
            </nav>
        </div>

        <div className='Home w-100 row-12' id='home'>
            <div className='col-6'>
                <h1>Hi,<span> I am Muthukumar</span></h1>
                <h4>I am Frontend Developer</h4>
            </div>
        </div>

        <div className='About_Me row-12 w-100 d-flex' id='aboutme'>
            <div className='col-6'>
                <img src={Code} alt="About me image" />
            </div>
            <div className='col-6'>
                <h4>About Me</h4>
                <p>Hi, I'm Muthukumar, a passionate frontend developer with experience <br /> in building web applications using React. During my internship as a frontend <br /> React developer, I had the opportunity to work on a live project for Solana's website. <br /> My responsibilities included implementing user interfaces, ensuring the responsiveness <br /> of the website, and assisting with the Bootstrap framework. <br /></p>
                <p>I am enthusiastic about creating elegant and efficient solutions to <br /> complex problems. I have a keen eye for detail and a strong commitment to delivering <br /> high-quality work. My goal is to continue learning and growing as a developer <br /> while contributing my skills to meaningful projects.</p>
            </div>
        </div>

        <div className='row-12 Skill d-flex' id='skill'>
            <div className='col-6'>
                <h4>Skill</h4>
                <p>I excel in frontend development, with expertise in HTML, CSS, and JavaScript,<br /> along with frameworks like React.js. I also have a strong command of design tools <br /> such as Figma, ensuring a seamless blend of functionality and aesthetics in my projects.</p>
            </div>
            <div className='col-6 icon_div_main '>
                <div className='d-flex mt-5 ms-5'>
                    
                    <div className='icon_div'>
                        <FaHtml5 className='Icon'/>
                        <h5>HTML</h5>
                    </div>
                    <div  className='icon_div'>
                        <FaCss3Alt className='Icon'/>
                        <h5>CSS</h5>
                    </div>
                    <div  className='icon_div'>
                        <SiJavascript className='Icon'/>
                        <h5>Javascript</h5>
                    </div>
                    <div  className='icon_div'>
                        <GrReactjs className='Icon'/>
                        <h5>React js</h5>
                    </div>
                </div>

                <div className='d-flex mt-5 ms-5'>
                    <div className='icon_div'>
                        <FaBootstrap className='Icon'/>
                        <h5>Bootstrap</h5>
                    </div>
                    <div className='icon_div'>
                        <SiMui className='Icon'/>
                        <h5>Material Ui</h5>
                    </div>
                    <div className='icon_div'>
                        <FaNodeJs className='Icon'/>
                        <h5>Node js</h5>
                    </div>
                    <div className='icon_div'>
                        <SiMongodb className='Icon'/>
                        <h5>Mongo DB</h5>
                    </div>
                </div>
                <div className='mt-5 ms-5 icon_div '>
                    <div>
                    <FiFigma className='Icon'/>
                    <h5>Figma</h5>
                    </div>
                    
                </div>
                
            </div>
        </div>

        <div id='experience row'>
            <div className='col-3'></div>
            <div className='col-6'>
                <h2>Experience</h2>
                <p>Frontend Developer Intern
                    BeLead Technologies, Madurai
                    June 2023 - September 2023
                </p>
            </div>
            <div className='col-3'></div>
        </div>
    </section>
  )
}

export default Home