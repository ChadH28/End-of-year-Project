import express from 'express';

const app = express();

// creating pathway
app.get('api/products', (req,res) => {
    res.send(data.products);
})