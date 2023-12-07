import ghLogo from '../assets/gh.png'
import mailLogo from '../assets/mail.png'
import '../styles/Contact.css'
export default function Contact() {
  
  return (
    <div className='contactsBox'>
      <p className='message'>feel free to send me a message :) !</p>
      <div className='github'>
        <img src={ghLogo} alt="github logo" /> 
        <a className="hoveranimation" href="https://github.com/brandesdavid">
          @brandesdavid
          </a>
      </div>
      <div className='mail'>
        <img src={mailLogo} alt="mail logo" /> 
        <a className="hoveranimation" href="https://github.com/brandesdavid">
          dbrandesx@gmail.com
          </a>
      </div>
    </div>
  )
}


