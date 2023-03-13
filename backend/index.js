const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoute  = require('./routes/auth/auth');
const productRoute  = require('./routes/product/product');
const cartRoute  = require('./routes/cart/cart');
const orderRoute  = require('./routes/orders/orders');
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database Connected!')).catch((err) => console.log(err));

app.use('/api/auth', authRoute)
app.use('/api/product',productRoute)
app.use('/api/cart',cartRoute)
app.use('/api/myorders',orderRoute)

app.listen(PORT, () => {
    console.log('server started')
})