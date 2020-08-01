import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveProduct
} from '../../actions/productActions';

function ProductMangement(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [material, setMaterial] = useState("");
    const [category, setCategory] = useState("");
    const [numInStock, setNumInStock] = useState("");
    const [description, setDescription] = useState("");

    const productSave = useSelector((state) => state.productSave);

    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = productSave;
    const dispatch = useDispatch();

    useEffect(() => {

    return () => {
        //
    };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveProduct({
                name,
                price,
                image,
                material,
                category,
                numInStock,
                description,
            })
        );
    };

    return (
    <div className="content content-margined">
        <div className="product-header">
            <h3>Products</h3>
        </div>
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Create Product</h2>
                    </li>
                    <li>
                        {loadingSave && <div>Loading...</div>}
                        {errorSave && <div>{errorSave}</div>}
                    </li>
                    <li>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="price">Price</label>
                        <input type="text" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="image">Image</label>
                        <input type="text" name="image" value={image} id="image" onChange={(e) => setImage(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="material">Material</label>
                        <input type="text" name="material" value={material} id="material" onChange={(e) => setMaterial(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="countInStock">InStock</label>
                        <input type="text" name="numInStock" value={numInStock} id="numInStock" onChange={(e) => setNumInStock(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="name">Category</label>
                        <input type="text" name="category" value={category} id="category" onChange={(e) => setCategory(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" value={description} id="description" onChange={(e) => setDescription(e.target.value)}/>
                    </li>
                    <li>
                        <button type="submit" className="button primary">
                            Create
                        </button>
                    </li>
                </ul>
            </form>
        </div>
  

        <div className="product-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Material</th>
                        <th>Action</th>
                    </tr>
                </thead>

                
            </table>
        </div>
    </div>
    );
}

export default ProductMangement;
