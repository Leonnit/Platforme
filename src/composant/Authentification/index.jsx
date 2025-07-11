import './style.css';
import google from '../../image/google.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Composant d'inscription
function FormInscription() {
  const navigate = useNavigate()
  const VersSeconnecte = () => {
      navigate('/Connection');
  };

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Password")
  };

  return (
    <div className="Seconnection">
      <form onSubmit={handleSubmit} className="connect">
        <h1>S'inscrire</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, vel.</p>
        <input type="text" name="name" placeholder="Entrez le nom" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Entrez l'email" value={formData.email} onChange={handleChange} required />
        
        <button type="submit" className="btn-connexion">Suivant</button>
        <div className="inscrirer">
          <span>Vous avez un compte ? <a href="#leonnit" onClick={VersSeconnecte}>Se connecter</a></span>
        </div>
        <div className="hr">
          <span></span>
          <p>ou avec</p>
          <span></span>
        </div>
        <button className="btn-googl">
          <img src={google} alt="Logo Google" />
        </button>
        <div className="paragraphe">
          Lorem ipsum dolor sit amet, adipisicing elit. Neque unde hic at corporis.
        </div>
      </form>
    </div>
  );
}

// Composant de connexion
function FormConnection() {
  const navigate = useNavigate();
  const VersInscription = () => {
      navigate('/Inscription');
  };

  const [formData, setFormData] = useState({
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données envoyées :', formData);
  };

  return (
    <div className="Seconnection">
      <form onSubmit={handleSubmit} className="connect">
        <h1>Se connecter</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, vel.</p>
        <input type="email" name="email" placeholder="Email ou numéro" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Mot de passe" required />
        <button type="submit" className="btn-connexion">Se connecter</button>
        <div className="inscrirer">
          <span>Vous n'avez pas de compte ? <a href="#" onClick={VersInscription}>S'inscrire</a></span>
        </div>
        <div className="hr">
          <span></span>
          <p>ou avec</p>
          <span></span>
        </div>
        <button className="btn-googl"><img src={google} alt="Logo Google" /></button>
        <div className="paragraphe">Lorem ipsum dolor sit amet, adipisicing elit. Neque unde hic at corporis.</div>
      </form>
    </div>
  );
}

// Composant de création de mot de passe
function FormPassword() {
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données envoyées :', formData);
  };

  return (
    <div className="Seconnection">
      <form onSubmit={handleSubmit} className="connect">
        <h1>Créer un mot de passe</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, vel.</p>
        <input type="email" name="email" placeholder="Email ou numéro" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Nouveau mot de passe" required />
        <button type="submit" className="btn-connexion">Valider</button>
        <div className="inscrirer">
          <span>Déjà inscrit ? <a href="#">Se connecter</a></span>
        </div>
      </form>
    </div>
  );
}

// Exportation des composants
export { FormConnection, FormInscription, FormPassword };
