import './App.css';
//import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
//import Home from './components/Home';
//import Login from './components/Login';
//import Register from './components/Register';
import About from './components/About';

function App() {
  return (
        <div className="App">
          <Header />
          <About />
        </div>
  );
}

export default App;
