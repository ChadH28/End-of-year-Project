import mongoose from 'mongoose';
import config from 'config';

const db = config.get('mongoURI');

const connectDB = () => {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('MONGODB IS UP & RUNNING'))
    .catch((err) => {
        console.error(err.message)
        process.exit(1);
    });
}

export default {
    connectDB
}