import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderComponent'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
     );
}

export default App;
