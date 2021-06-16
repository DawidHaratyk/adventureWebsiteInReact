import React from 'react';
import Navbar from './components/Navbar';
import WelcomeView from './components/WelcomeView';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import EpicPlaces from './components/EpicPlaces';
import Form from './components/Form';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={WelcomeView}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/sign-up" exact component={SignUp}/>
        </Switch>
        <EpicPlaces/>
        <div className="contact">
          <Form/>
          <AboutUs/>
          <Footer/>
        </div>
      </Router>
    </>
  )
}

export default App;
