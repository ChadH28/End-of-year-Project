import React from 'react';
import './App.css';
// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Products from './components/Products';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Sidebar/>
      <main className='main'>
        <Products/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
