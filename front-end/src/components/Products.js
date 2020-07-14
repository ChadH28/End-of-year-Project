import React from 'react';
import './Products.css';
import d1 from './images/d1.jpg';

function Products() {
    return (
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
    )
}

export default Products
