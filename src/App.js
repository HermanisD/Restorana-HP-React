import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Footer/>
    </BrowserRouter>
     );
}

export default App;
