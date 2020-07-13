import React from 'react';
import './App.css';
import d1 from  './components/images/d1.jpg';

function App() {
  return (
    <div className='App'>
      <nav className='navbar'>
        <div className='nav-brand'>
          <a href='/'>Fineprint</a>
        </div>
        <div className='nav-links'>
          <a href='/'>Cart</a>
          <a href='/'>Sign In</a>
        </div>
      </nav>
      <main className='main'>
        <div className='content'>
          <ul className='products'>
            <li>
              <div className='product'>
                <img src={d1} alt='product item'/>
                <div className='product-name'>Slim Shirt</div>
                <div className='product-brand'>Nike</div>
                <div className='price'>R120</div>
                <div className='rating'>3 Stars (1 Review)</div>
              </div>
            </li>
            <li>
              <div className='product'>
                <img src={d1} alt='product item'/>
                <div className='product-name'>Slim Shirt</div>
                <div className='product-brand'>Nike</div>
                <div className='price'>R120</div>
                <div className='rating'>3 Stars (1 Review)</div>
              </div>
            </li>
            <li>
              <div className='product'>
                <img src={d1} alt='product item'/>
                <div className='product-name'>Slim Shirt</div>
                <div className='product-brand'>Nike</div>
                <div className='price'>R120</div>
                <div className='rating'>3 Stars (1 Review)</div>
              </div>
            </li>
            <li>
              <div className='product'>
                <img src={d1} alt='product item'/>
                <div className='product-name'>Slim Shirt</div>
                <div className='product-brand'>Nike</div>
                <div className='price'>R120</div>
                <div className='rating'>3 Stars (1 Review)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className='footer'>All Ts and Cs apply</footer>
    </div>
  );
}

export default App;
