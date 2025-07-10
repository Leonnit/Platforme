import "./style.css"
import facebook from '../../image/facebook(2).png'
import instagrame from '../../image/instagram(2).png'
import twitter from '../../image/twitter(1).png'
import linkedin from '../../image/linkedin(3).png'
import appel from '../../image/appel-telephonique.png'
 

function MyHead (){
    return (
        <>
            <div className="header">
                <div className="head">
                    <span> <img src={appel} alt="appel" srcset="" /> 034 72 732 16</span>
                    <div className="nav">
                        <div className="icon"><img src={facebook} alt="facebook" srcset="" /></div>
                        <div className="icon"><img src={instagrame} alt="instagrame" srcset="" /></div>
                        <div className="icon"><img src={twitter} alt="twitter" srcset="" /></div>
                        <div className="icon"><img src={linkedin} alt="linkedin" srcset="" /></div>
                    </div>
                </div>
            </div>
            <header> 
                <nav>
                    <h1>LogoMe</h1>
                    <div className="menu-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu">
                        <a className="Inscription" href="#contact">S'Inscrirer</a>
                        <a className="connection" href="#contact">Se Connecter</a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default MyHead