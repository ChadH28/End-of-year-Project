import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

// CSS
import './App.css';
// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
// Pages
import HomePage from './components/pages/Homepage';
import ProductPage from './components/pages/Productpage';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar/>
      <Sidebar/>
      <main className='main'>
        <Route path='/' exact={true} component={HomePage} />
        <Route path='/product/:id' component={ProductPage} />
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;