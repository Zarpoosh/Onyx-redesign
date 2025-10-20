import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// or less ideally
import { useState, useEffect } from "react";
import OffcanvasExample from "./components/navbar/navbar";
import ImageSlider from "./components/ slider/InageSlider";
import "./styles/global.css"
import Services from "./components/services/Services";
import Products from "./components/products/Products";
import BackToTop from "./components/BackToTop";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import SubscriptionSection from "./components/footer/Subscreption";


const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true; // پیش‌فرض تاریک
  });

// save in local storage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev: boolean) => !prev);
  };


  return (
    <>
    <div className={darkMode ? 'text-light' : 'bg-light text-dark'}>

      <OffcanvasExample darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <ImageSlider/>
      <Products/>
      <Services/>
      <About/>
      <Projects/>
      <SubscriptionSection/>
      <Footer/>
      <BackToTop/>
    </div>
    </>
  );
}

export default App;
