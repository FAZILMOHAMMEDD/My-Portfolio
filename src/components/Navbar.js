import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
function Navbar()
{
  var [ismobile,setmobile]=useState(false)
  function handle()
  {
    setmobile(!ismobile)
  }
  return(
    <div class="navbar-container">
    <div class="navbar">
      <div class="navbar-1">
        <h1>My-Portfolio</h1>
      </div>
      <div class="navbar-2" onClick={handle}>
      {ismobile?<IoCloseSharp />:<GiHamburgerMenu />}
      </div>
      <div className={ismobile?"nav-links":"navbar-3"}>
        <p>Home</p>
        <p>Projects</p>
        <p>Skills</p>
        <p>Contact</p>
        <p>About us</p>
      </div>
    </div>
    </div>
  )
}
export default (Navbar)