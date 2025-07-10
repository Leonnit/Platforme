import './style.css'
import google from '../../image/google.png'

function Authentification(){
    return (
        <>
            {/**Page de se connecter */}
            <div className="Seconnection">
                <div className="connect">
                    <h1>Se connecter</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, vel.</p>
                    <input type="email" placeholder="Email ou numero" required/>
                    <input type="password" placeholder="Mot de passe" required/>
                    <button className="btn-connexion">Se Connecter</button>
                    <div className="inscrirer">
                        <span>Vous n'avez pas de compte <a href="#">S'inscrirer</a></span>
                    </div>
                    <div className="hr">
                        <span></span>
                        <p>ou avec</p>
                        <span></span>
                    </div>
                    <button className="btn-googl"><img src={google} alt="" /></button>
                    <div className="paragraphe">Lorem ipsum dolor, adipisicing elit. Neque unde hic at corporis. Voluptate doloribus deserunt quia placeat quam voluptas!</div>
                </div>
            </div>
            {/**Page de l'inscription */}
            <div className="Seconnection">
                <div className="connect">
                    <h1>S'inscrirer</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, vel.</p>
                    <input type="text" placeholder="Entre le nom " required/>
                    <input type="email" placeholder="entre email" required/>
                    <button className="btn-connexion">Suivant</button>
                    <div className="inscrirer">
                        <span>Vous avez une compte <a href="#">Se connecter</a></span>
                    </div>
                    <div className="hr">    
                        <span></span>
                        <p>ou avec</p>
                        <span></span>
                    </div>
                    <button className="btn-googl"><img src={google} alt="" /></button>
                    <div className="paragraphe">Lorem ipsum dolor, adipisicing elit. Neque unde hic at corporis. Voluptate doloribus deserunt quia placeat quam voluptas!</div>
                </div>
            </div>
            
        </>
    )
}

 export default Authentification