const router = require('express').Router();
const verifyToken = require('../../verifyToken/verifyToken');
const Cart = require('../../model/cart/cartModel');

router.post('/', verifyToken, async (req, res) => {
    const newCart = new Cart({
        productName: req.body.productName,
        productId: req.body.productId,
        userID: req.user.id,
        qty: req.body.qty,
        TotalAmount: req.body.totAmt
    });
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/', verifyToken, async (req, res) => {
    try {
        const myCart = await Cart.find({userID : req.user.id});
        res.status(200).json(myCart);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', verifyToken, async (req, res) => {
    try {
        const cartItem = await Cart.findById(req.params.id);
        res.status(200).json(cartItem);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const deletedCart = await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedCart);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', verifyToken, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{
            new: true
        });
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router ;
