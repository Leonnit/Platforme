import MyHead from "./composant/head";
import Header from "./composant/header";
import "./App.css"
import Footer from "./composant/footer";

function App(){
  return (
    <div className="contenue">
      <MyHead/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App
