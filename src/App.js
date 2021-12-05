import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Services from './components/Services';


function App() {
  return (
        <div className="page-container">
          <div className="content-wrap">
          <Header />
          <BrowserRouter>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/user/login">
              <Login />
            </Route>
            <Route path="/user/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            
          </BrowserRouter>
          </div>
          <Footer/>
        </div>
  );
}

export default App;
