import React,{useEffect, useState} from 'react';
import Typewriter from "react-typewriter-effect";
import AOS from 'aos';
const Home=()=>{
    const [Name,setName]=useState("");
    const [Name2,setName2]=useState("");
    const [Name3,setName3]=useState("");
    const [Name4,setName4]=useState("");
    useEffect(()=>{
        AOS.init({duration:2000},{delay:1000},{debounceDelay:1000000000});
    })
    return(
        <>
        <div className='parent'>
        <div className='navbar'>
            <div className='portifolio'>Port<span>folio</span></div>
            <div>
                <ol className='Listnavbar' type='none'>
                    <li className="List"><a  href="#Home"><i class="fa-solid fa-house"></i>Home</a></li>
                    <li className="List"><a href="#About"><i class="fa-solid fa-user"></i>About</a></li>
                    <li className="List"><a href="#Skills"><i class="fa-solid fa-code"></i>Skills</a></li>
                    <li className="List"><a href="#Education"><i class="fa-solid fa-graduation-cap"></i>Education</a></li>
                    <li className="List"><a href="#Contact"><i class="fa-solid fa-phone"></i>Contact</a></li>
                    <li className='Lt'><label htmlFor="chk1"><i class="fa-solid fa-bars"></i></label></li>
                </ol>
            </div>
            <input type="checkbox" id="chk1" />
            <div className="slide">
            <li className='Lt1'><label htmlFor="chk1"><i class="fa-solid fa-xmark"></i></label></li>
                    <li className="List"><a href="#Home"><i class="fa-solid fa-house"></i>Home</a></li>
                    <li className="List"><a href="#About"><i class="fa-solid fa-user"></i>About</a></li>
                    <li className="List"><a href="#Skills"><i class="fa-solid fa-code"></i>Skills</a></li>
                    <li className="List"><a href="#Education"><i class="fa-solid fa-graduation-cap"></i>Education</a></li>
                    <li className="List"><a href="#Contact"><i class="fa-solid fa-phone"></i>Contact</a></li>
            </div>
        </div>
        <section data-aos="fade-right"  className='Section' id="Home">
        <ol>
            <li className='ListSection'>Hello, my name is</li>
            <li className='ListSectionB'>Priyanshu Patwal</li>
        <li className='ListSectionC'><span>And I'm a</span><span><Typewriter
        // startDelay={1000}
        multiText={['Web Developer','Programmer']}
        typeSpeed={40}
        cursorColor="black"
        multiTextDelay={1000}
        multiTextLoop
        /></span>
        </li>
        <li className='aboutbtn' ><a href="#About">About Me</a></li>
        </ol>
        <div className='photo'><img src="./gentle.png"/></div>
        </section>
        <section data-aos="fade-up" id="About" >
        <h1><i class="fa-solid fa-user"></i>About Me</h1>
         <ol>
            <div className='profile'>
            <img src="./Profile.jpg" className="Profile"></img></div>
            <li data-aos="slide-right">Hii, I m Priyanshu Ptawal</li>
            <li data-aos="slide-right">I am Web Developer</li>
            <li data-aos="slide-right">I am pursuing Bachelor's of Technology in Computer Science</li>
            <li data-aos="slide-right">I am very passionate about learning coding</li>
            <li data-aos="slide-right">Age: 21</li>
            <li data-aos="slide-right"><span>Phone Number:</span> 6395210398</li>
            <li data-aos="slide-right"><span>E-mail:</span> priyanshupatwal123@gmail.com</li>
            <li data-aos="slide-right"><span>Location:</span> New delhi,India-110015</li>
         </ol>
         </section>
         <section data-aos="fade-up" id="Skills" >
            <h1><i class="fa-solid fa-code"></i>Skills & Technology</h1>
            <div className='grid'>
                <div data-aos="flip-right"><img src="./C++.png" alt="failed"/>C++</div>
                <div data-aos="flip-right"><img src="./Python.png" alt="failed"/>Python</div>
                <div data-aos="flip-right"><img src="./Java.png" alt="failed"/>Java</div>
                <div data-aos="flip-right"><img src="./JS.png" alt="failed"/>Javascript</div>
                <div data-aos="flip-right"><img src="./HTML.png" alt="failed"/>Html5</div>
                <div data-aos="flip-right"><img src="./CSS.png" alt="failed"/>CSS</div>
                <div data-aos="flip-right"><img src="./Reactjs.png" alt="failed"/>ReactJS</div>
                <div data-aos="flip-right"><img src="./Nodejs.png" alt="failed"/>NodeJS</div>
                <div data-aos="flip-right"><img src="./Expressjs.png" alt="failed"/>ExpreesJS</div>
                <div data-aos="flip-right"><img src="./Mongodb.png" alt="failed"/>MongoDB</div>
            </div>
        </section>
        <section data-aos="fade-up" id="Education">
            <h1><i class="fa-solid fa-graduation-cap"></i>My Education</h1>
            <div className='flexbox'>
                <div data-aos="flip-down"><img src="./School10.png" alt="failed"/>
                <ol>
                <li>Class-10 Certificate</li>
                <li>St. Joseph Convent School, Uttarkhand | CBSE</li>
                <li>2016-2018 | Completed</li>
                </ol>
                </div>
                <div data-aos="flip-down"><img src="./School12.png" alt="failed"/>
                <ol>
                <li>Class-12 Certificate</li>
                <li>Joseph And Mary Public School,New Delhi | CBSE</li>
                <li>2018-2020 | Completed</li>
                </ol>
                </div>
                <div data-aos="flip-down"><img src="./MDU.png" alt="failed"/>
                <ol className="MDU KARGA">
                <li>B.Tech in computer Science</li>
                <li>Maharshi Dhayand University, Rohtak</li>
                <li>2020-2024 | Pursuing</li>
                </ol>
                </div>
            </div>
        </section>
        <section  data-aos="fade-up" id="Contact">
        <h1><i class="fa-solid fa-headphones"></i>&nbsp;&nbsp;Get In Touch</h1>
            <div className='container'>
            <div data-aos="flip-down" className="flexbox">
            <div>
            <span className='First'><i class="fa-solid fa-house"></i></span>
            <input type="text" placeholder="Name" onChange={(event)=>{setName(event.target.value)}} value={Name}/></div>
            <div>
            <span className='Second'><i class="fa-solid fa-envelope"></i></span>
            <input type="Email" placeholder='Email'value={Name2} onChange={(event)=>{setName2(event.target.value)}}/></div>
            <div>
            <span className='Third'><i class="fa-solid fa-phone"></i></span>
            <input type="Number" placeholder='Phone' value={Name3} onChange={(event)=>{setName3(event.target.value)}}/></div>
            <div>
            <span className='Fourth'><i class="fa-solid fa-comment"></i></span>
            <textarea  cols="30" rows="10" placeholder='Message' value={Name4} onChange={(event)=>{setName4(event.target.value)}}></textarea></div>
            <div className='fifth'>
            <span className="Fifth"><i class="fa-sharp fa-solid fa-paper-plane"></i></span>
            <input type="reset" onClick={()=>{setName("");setName2("");setName3("");setName4("")}} value="submit"/></div>
            </div></div>
        </section>
        <footer id="footer">
            <h1>Priyanshu Patwal Portfolio</h1>
            <p>thanks for coming to my portflio website. I hope you like my portfolio website.</p>
            <p>This is a simple portfolio website made by me.</p>
            <h1>Quick Links</h1>
            <ol className='ol'>
                <li><a href="#Home">&nbsp;<i class="fa-solid fa-arrow-right"></i>Home</a></li>
                <li><a href="#About">&nbsp;<i class="fa-solid fa-arrow-right"></i>About</a></li>
                <li><a href="#Skills">&nbsp;<i class="fa-solid fa-arrow-right"></i>Skills</a></li>
                <li><a href="#Education">&nbsp;<i class="fa-solid fa-arrow-right"></i>Education</a></li>
                <li><a href="#Contact">&nbsp;<i class="fa-solid fa-arrow-right"></i>Contact</a></li>
            </ol>
            <h1>Contact Info</h1>
            <ol>
            <li><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;+91 639-521-0398</li>
            <li><i class="fa-solid fa-envelope">&nbsp;&nbsp;</i>priyanshupatwal123@gmail.com</li>
            <li><i class="fa-solid fa-location-pin">&nbsp;&nbsp;</i>New Delhi, India</li>
            </ol>
            <div>Designed By Priyanshu Patwal</div>
        </footer>
        </div>
        </>
    );
}
export default Home;