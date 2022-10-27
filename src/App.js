import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <main>
      <Nav />
      
  
   <Home />
      <Footer />


    </main>

  );
}

export default App;
