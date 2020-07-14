import React from 'react';
import {Link} from 'react-router-dom';
import './Products.css';
import data from '../Data';
import image from './images/d1.jpg'

function Products() {
    return (
        <div className='content'>
          <ul className='products'>
            {
                data.products.map(product =>
                    <li>
                        <div className='product'>
                            <Link to={'/product/'+ product._id}>
                                <img className='product-image' src={image} alt='product item'/>
                            </Link>
                            <div className='product-name'><Link to={'/product/'+ product._id}>{product.name}</Link></div>
                            <div className='product-brand'>{product.brand}</div>
                            <div className='price'>R{product.price}</div>
                            <div className='rating'>{product.rating} Stars ({product.reviews} Review)</div>
                        </div>
                    </li>
                )
            }
          </ul>
        </div>
    )
}

export default Products
