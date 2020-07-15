import React from 'react';
import data from '../../Data';
import {Link} from 'react-router-dom';
import image from '../images/d1.jpg';
import './Productpage.css'

function ProductPage(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x=> x._id === props.match.params.id)
    return (
        <div>
            <div>
                <Link className='back-link' to='/'>Back to results</Link>
            </div>
            <div className='description'>
                <div className='description-image'>
                    <img src={image} alt='product'/>
                </div>
                <div className='description-info'>
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} Stars ({product.reviews}) Reviews
                        </li>
                        <li>
                            <b>R {product.price}</b>
                        </li>
                        <li>
                            Description:
                            <div>{product.description}</div>
                        </li>
                    </ul>
                </div>
                <div className='description-action'>
                    <ul>
                        <li>
                            Price: R{product.price}
                        </li>
                        <li>
                            Status: {product.status}
                        </li>
                        <li>
                            Qty:<select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                        </li>
                        <li>
                            <button>Add to cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductPage