import React, { useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Products.css';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from './Loader'

function Products(props) {
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {
          //
        };
    }, []);
    return loading ? (<Loader/>)
        :error ? (<div>{error}</div>) : (
        <div className='content'>
          <ul className='products'>
            {products.map(product =>
                <li key={product._id}>
                    <div className='product'>
                        <Link to={'/product/'+ product._id}>
                            <img className='product-image' src={product.image} alt='product item'/>
                        </Link>
                        <div className='product-name'><Link to={'/product/'+ product._id}>{product.name}</Link></div>
                        <div className='product-brand'>{product.material}</div>
                        <div className='price'>R{product.price}</div>
                        <div className='rating'>{product.rating} Stars ({product.reviews} Review)</div>
                    </div>
                </li>
            )}
          </ul>
        </div>
    )
}

export default Products