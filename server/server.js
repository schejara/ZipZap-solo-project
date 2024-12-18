const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');
const productRouter = require('./routes/product.router')
const productdetailRouter = require('./routes/productdetail.router')
const orderRouter = require('./routes/order.router')
const orderHistoryRouter = require('./routes/orderhistory.router')
const adminRouter = require('./routes/admin.router')
const categoryRouter = require('./routes/categorys.router')
const categoryItemRouter = require('./routes/categoryItem.router')

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);
app.use('/api/products',productRouter);
app.use('/api/productsdetail',productdetailRouter);
app.use('/api/order/',orderRouter);
app.use('/api/orderhistory',orderHistoryRouter);
app.use('/api/admin',adminRouter);
app.use('/api/category',categoryRouter);
app.use('/api/categoryItem',categoryItemRouter);


// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
