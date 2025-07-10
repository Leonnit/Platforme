import MyHead from "./composant/head";
import Header from "./composant/header";
import "./App.css"
import Footer from "./composant/footer";
import Section from "./composant/section";

function App(){
  return (
    <div className="contenue">
      {/*{ Header du page}*/}
      <MyHead/>
       {/*{ Section hero du page}*/}
      <Header/>
      {/*{ section du page}*/}
      <Section/>
      {/*{ Footer du page}*/}
      <Footer/>
    </div>
  );
}

export default App
