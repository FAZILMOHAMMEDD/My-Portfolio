import call from "../assests/images/call.png"
import mail from "../assests/images/mail.png"
import location from "../assests/images/location.png"
function Contact()
{
  return(
    <div class="contact">
    <h1>CONTACT</h1>
    <div class="contact-container">
     <div class="contact-1">
      <img src={location} alt="location"></img>
      <h3>ADDRESS</h3>
      <p>16/21 Mariyammamn Kovil 3rd Street Thiruvannnamalai</p>
     </div>
     <div class="contact-1">
      <img src={call} alt="call"></img>
      <h3>CALL US</h3>
      <p>8072099493</p>
     </div>
     <div class="contact-1">
      <img src={mail} alt="mail"></img>
      <h3>MAIL US</h3>
      <p>fazilmohammedbca@gmail.com</p>
     </div>
    </div>
 </div>
  )
}
export default(Contact)