import "./App.css"
import { FormConnection, FormInscription, FormPassword } from "./composant/Authentification";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Section from "./composant/section";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Section/>}/>
        <Route path="/Inscription" element={<FormInscription/>}/>
        <Route path="/Password" element={<FormPassword/>}/>
        <Route path="/Connection" element={<FormConnection/>}/>
      </Routes>
    </Router>
  );
}

export default App
