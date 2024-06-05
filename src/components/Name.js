import one from '../assests/images/WEB.avif'
import {useTypewriter} from'react-simple-typewriter'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
function Name()
{
  var [text]=useTypewriter(
    {
  words:["FULL STACK DEVELOPER","FRONTEND DEVELOPER","BACKEND DEVELOPER"],
  loop:{},
  typeSpeed:120,
 delaySpeed:80,
    }
  )

  return(
    <div className="name">
    <div className="name-1">
      <h2 style={{color:"darkgoldenrod", font:" 1em sans-serif", fontSize:"xx-large"}}>Hii,</h2>
      <h4 style={{font: "1em sans-serif",fontSize:"xx-large", color:"rgba(132, 0, 255, 0.759)"}}>I'AM Mohammed Fazil</h4>
      <h3 style={{font:"1em sans-serif",fontSize:"large",color:"rgb(172, 16, 172);"}}>As I'm a {''}<span className='text'>{text}</span> </h3>
      <p style={{color:"rgb(122, 169, 41)",font:"1em sans-serif",fontSize:"large"}}>Welcome to my portfolio.I am Web Developer a passionate and dedicated eager
      to begin my proffesional journey in tech industry.With a Strong Foundation
      In both Front-End and Backend Development</p>
      <div class="profile">
      <a href='mail.com'><FaLinkedin /></a>
      <a href='mail.com'><FaGithub/></a>
      <a href='mail.com'><MdEmail/></a>
      <a href='mail.com'><FaSquareWhatsapp/></a>
     </div>
     <div className='button'>
      <button>Download CV</button>
     </div>
     <div className="name-4">
     <img src={one} alt='web'></img>
   </div>
    </div>
    
    <div className='opps'>
    <div className="name-2">
        <img src={one} alt='web'></img>
     </div>
     </div>
  </div>
  
  )
}
export default(Name)