const express = require('express');
const connectDB = require('./config/db');
const data = require('./Data');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');


const app = express();
const PORT = process.env.PORT || 5000  // You can add a comment here why you want to use 4000.

app.listen(PORT, () => {console.log(`SERVER STARTED AT LOCALHOST:${PORT}`)});

// Connnecting database to mongoDB
connectDB();


// Defining Routes.
app.use('/api/users', userRoute);
app.use(bodyParser.json())

app.get('/api/products', (req,res) => {
    res.send(data.products);
});
app.get('/api/products/:id', (req,res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId)
    if(product)
        res.send(product);
    else
        res.status(404).send({msg: "Product not found."})
});
