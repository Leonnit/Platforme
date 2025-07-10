// Importe le fichier CSS dans "./style.css"
// Importe icone 
import "./style.css"
import facebook from '../../image/facebook(2).png'
import instagrame from '../../image/instagram(2).png'
import twitter from '../../image/twitter(1).png'
import linkedin from '../../image/linkedin(3).png'

function Footer(){
    return (
        <div className="centre-footer">
            <div className="hr-footer">
                <div className="footer-contenue">
                    <div className="apropos">
                        <strong>A propos</strong>
                        <p>📢 Rejoins-nous dans l’aventure ! Tu veux rester à jour sur nos projets, astuces tech et découvertes insolites ? Suis-nous sur</p>
                    </div>
                    <div className="menu-authentification">
                        <strong>Menu</strong>
                        <a href="">Se connecter</a>
                        <a href="">S'Inscrirer</a>
                        <a href="">A Propos</a>
                    </div>
                    <div className="lien">
                        <strong>Contact</strong>
                        <p>email: leonnitnomenjanahary@gmail.com</p>
                        <div className="link">
                            <a href="#auc" className="icon"><img src={facebook} alt="facebook" srcset="" /></a>
                            <a href="#auc" className="icon"><img src={instagrame} alt="instagrame" srcset="" /></a>
                            <a href="#auc" className="icon"><img src={twitter} alt="twitter" srcset="" /></a>
                            <a href="#auc" className="icon"><img src={linkedin} alt="linkedin" srcset="" /></a>
                        </div>
                    </div>
                </div>
                <hr />
                <span>© 2025 Copyrithe by Leonnit Nomenjanahary. Tous droits réservés.</span>
            </div>
        </div>
    )
}

export default Footer

