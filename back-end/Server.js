import express from 'express';
import data from './Data';
import config from './Config';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute'

dotenv.config();

// connecting to mongodb
const mongodbUrl = config.MONGODB_URL;
    mongoose.connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,  
    })
    .catch((error) => console.log(error.reason));


const app = express();

// creating pathways
app.use('/api/users', userRoute);
app.use(bodyParser.json())
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