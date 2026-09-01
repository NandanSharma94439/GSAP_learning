import {socials} from '../../constants/index.js'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import{ SplitText } from 'gsap/all'
const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2',{type:'words'});

        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:'top center',
            },
        })

        timeline
         .from(titleSplit.words,{
            opacity:0,yPercent:100,stagger:0.03,ease:"power1.inOut"
        })
        .from('#contact h3,contact p',{
            opacity:0,yPercent:100,stagger:0.02
        })
        .to('#f-right-leaf',{
            y: '-50',duration:1,ease:'power1.inOut'
        })
        .to('#f-left-leaf',{
            y: '50',duration:1,ease:'power1.inOut'
        },'<')
    })
    return (
       <footer id="contact">
       <img src="/images/footer-right-leaf.png" alt ="leaf-right" id="f-right-leaf" />
       <img src="/images/footer-left-leaf.png" alt ="leaf-left" id="f-left-leaf" />
       <div className ='content'>
        <h2>Where to Find Us</h2>

        <div>
            <h3>Visit our Kotha</h3>
            <p>A.D Boys Hostel, 388121, New Vallabh VidyaNagar</p>
        </div>
        <div>
            <h3>
                Contact Us
            </h3>
            <p>
                +91 99066 49455
            </p>
            <p>RishavKotheWali@gmail.com</p>
        </div>
        <div>
            <h3>Open 24/7</h3>
        </div>
            <h3>
                Socials
            </h3>
            <div className="flex-center gap-5">
                {socials.map((social) => (
                    <a key={social.name} 
                       href={social.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label={social.name}
                    >
                        <img src={social.icon}/>
                    </a>
                ))}
            </div>
       </div>
        </footer>
    )
}
export default Contact