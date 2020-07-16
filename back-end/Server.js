import express from 'express';
import data from './Data';

const app = express();

// creating pathways
app.get('/api/products', (req,res) => {
    res.send(data.products);
});
app.get('/api/products:id', (req,res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId)
    if(product)
        res.send(product);
    else
        res.status(404).send({msg: "Product not found"})
});

app.listen(5000, () => {console.log('SERVER STARTED AT http://localhost:5000')});