import me from '../assets/img/pixar3dblack.png'
import doubleArrow from '../assets/img/double-arrow.svg'
import insta from '../assets/img/insta.svg'
import linkedIn from '../assets/img/linkedin-svgrepo-com.svg'
import github from '../assets/img/github-142-svgrepo-com.svg'
export default function Hero(){
    return(
        <section className="hero-section">
            <div className="hero-left-section">
                <p>Hello I'm <span className="name">Yazid tachfini.</span>
                 <br /> <span>Concepteur </span> 
                  <span className="frontend">Full stack <br/> <span className="developer"> PHP  Developer</span></span><br />
                   Based In <span className="morocco">Morocco</span></p>
                
                <div className="socials-countainer">
                    <div className="social-icon">
                      <a href="https://www.linkedin.com/in/yazid-tachfini-192a75346/" target='_blank'><img src={linkedIn} alt="" /></a> 
                    </div>
                    <div className="social-icon">
                      <a href="https://github.com/yazidtach" target='_blank'><img src={github} alt="" /></a> 
                    </div>
                    <div className="social-icon">
                      <a href="https://www.instagram.com/yazidtach/" target='_blank'><img src={insta}  alt="" /></a> 
                    </div>
                </div>
            </div>
            <div className="hero-right section">
                <img src={me} alt="pixar 3D style of Yazid tachfini" className="me" />
            </div>
            <img src={doubleArrow} className="double-arrow" alt="double arrow" />
        </section>
    )
}