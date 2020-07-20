import express from 'express';
import data from './Data';
import config from './Config';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {console.log(`SERVER STARTED AT LOCALHOST:${PORT}`)});

// connecting to mongodb
const mongodbUrl = config.MONGODB_URL;
    mongoose.connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,  
    })
    .catch((error) => console.log(error.reason));

// Defining Routes
app.use('/api/users', userRoute);
app.use(bodyParser.json())
app.get('/api/products', (req,res) => {
    res.send(data.products);
});

// pulling out one product from the products list via the id
app.get('/api/products:id', (req,res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId)
    if(product)
        res.send(product);
    else
        res.status(404).send({msg: "Product not found"})
});

