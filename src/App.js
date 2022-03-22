import logo from './logo.svg';
import './App.css';
import Header from './components/Header/HeaderComponent';
import Footer from './components/Footer/FooterComponent';
import { BrowserRouter } from 'react-router-dom';
import Jumba from './components/Jumbatron/JumbaComponent';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Jumba/>
    <Footer/>
    </BrowserRouter>
     );
}

export default App;
