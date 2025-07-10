import MyHead from "./composant/head";
import Header from "./composant/header";
import "./App.css"
import Footer from "./composant/footer";
import Section from "./composant/section";
import Authentification from "./composant/Authentification";

function App(){
  return (
    <div className="contenue">
      <Authentification/>
    </div>
  );
}

export default App
