import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';

function App() {
  return (
        <div className="App">
          <Header />
          <BrowserRouter>
            <Route path="/about">
              <About />
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
  );
}

export default App;
