import "./style.css"
import code from "../../image/code.png"
import web from "../../image/web.png"
import mobil from "../../image/mobile.webp"
import retour from "../../image/retour.png"
import next from "../../image/next.png"
import noirretour from "../../image/noir-retour.png"
import noirnext from "../../image/noir-next.png"
import profil1 from "../../image/team-1.jpg"
import profil2 from "../../image/team-2.jpg"
import profil3 from "../../image/team-3.jpg"
import profil4 from "../../image/team-4.jpg"
import MyHead from "../head"
import Footer from "../footer"
import Header from "../header"
import { useNavigate } from "react-router-dom"


function Section (){

    const navigate = useNavigate();

    const VersInscription = () => {
        navigate('/Inscription');
    };
    const VersSeconnecte = () => {
        navigate('/Connection');
    };
    return ( 
        <>   
            <MyHead/>
            <Header/>
            <section>
                <div className="section">
                    <div className="Service">
                        <h1>SERVICE POUR VOUS</h1>
                        <p className="paragraphe">On the other hand, the market tendencies and growth opportunities of it are quite high. In a more generalsense, the initial progress in the strategic management should help in resolving present challenges.</p>
                        <div className="formateur-certificat">
                            <div className="apprenant">
                                <strong>Apprenand</strong>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam officiis quis unde, sapiente culpa perferendis.</p>
                                <button onClick={VersSeconnecte}>Commencer</button>
                            </div>
                            <div className="formateur">
                                <strong>Formateur</strong>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam officiis quis unde, sapiente culpa perferendis.</p>
                                <button onClick={VersSeconnecte}    >Commencer</button>
                            </div>
                            <div className="Certificat">
                                <strong>Certifiat</strong>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam officiis quis unde, sapiente culpa perferendis.</p>
                                <button onClick={VersSeconnecte}    >Commencer</button>
                            </div>
                        </div>
                        <div className="button"><button onClick={hello}>Commencer maintenant</button></div>
                    </div>
                </div>
                <div className="section-formation">
                    <div className="formation">
                        <h1>FORMATIONS POPULAIRES</h1>
                        <div className="type-formation">
                            <img className="retour" src={retour} alt="retour" srcset="" width={70} height={70}/>
                            <div className="formation1">
                                <img src={code} alt="code" srcset="" width={250}/><br />
                                <strong>Introduction à la Blockchain</strong><br />
                                <span>Autheur: Jean NOMENJANAHARY Jean Jacque Arson</span><br />
                                <b>Prix:0.98$/mois</b>
                                <button onClick={VersSeconnecte}    >Commencer</button>
                            </div>
                            <div className="formation1">
                                <img src={web} alt="code" srcset="" width={250}/><br />
                                <strong>Développer des Smart Contracts</strong><br />
                                <span>Autheur:NOMENJANAHARY Jean Jacque Arson</span><br />
                                <b>Prix:0.98$/mois</b>
                                <button onClick={VersSeconnecte}    >Commencer</button>
                            </div>
                            <div className="formation1">
                                <img  src={mobil} alt="code" srcset="" width={250}/><br />
                                <strong>NFT et Web3 pour débutants</strong><br />
                                <span>Autheur: Jean NOMENJANAHARY Jean Jacque Arson</span><br />
                                <b>Prix:0.98$/mois</b>
                                <button onClick={VersSeconnecte}    >Commencer</button>
                            </div>
                            <img className="next" src={next} alt="retour" srcset=""  width={70} height={70}/>
                        </div>
                    </div>
                </div>
                <div className="commentaire">
                    <div className="commentair-contenue">
                        <h1>COMMENTAIRES</h1>
                        <div className="type-formation">
                            <img className="retour" src={noirretour} alt="retour" srcset="" width={50} height={50}/>
                            <div className="comms">
                                <div className="profil">
                                    <img src={profil1} alt="code" srcset="" width={60} height={60}/><br />
                                    <strong>Introduction à la Blockchain</strong><br />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quidem nesciunt.</p>
                            </div>
                            <div className="comms">
                                <div className="profil">
                                    <img src={profil2} alt="code" srcset="" width={60} height={60}/><br />
                                    <strong>Introduction à la Blockchain</strong><br />
                                </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quidem nesciunt.</p>
                            </div>
                            <div className="comms">
                                <div className="profil">
                                    <img src={profil3} alt="code" srcset="" width={60} height={60}/><br />
                                    <strong>Introduction à la Blockchain</strong><br />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quidem nesciunt.</p>
                            </div>
                            <div className="comms">
                                <div className="profil">
                                    <img src={profil4} alt="code" srcset="" width={60} height={60}/><br />
                                    <strong>Introduction à la Blockchain</strong><br />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quidem nesciunt.</p>
                            </div>
                            <img className="next" src={noirnext} alt="retour" srcset=""  width={50} height={50}/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>  
    )
}

function hello(){
    alert("hello Worde");
}
export default Section