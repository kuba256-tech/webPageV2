import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    AOS.init({
      duration:1500,
      once:true
    })
  })
  return (
    <main>
        <Header />
        <Hero/>
     
    </main>
  );
}

export default App;
