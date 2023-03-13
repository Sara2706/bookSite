const router = require('express').Router();
const Order = require('../../model/order/myOrderSchema');
const verifyToken = require('../../verifyToken/verifyToken');

router.get('/', verifyToken, async (req, res) => {

    try {
        const orders = await Order.find({ userID: req.user.id });
        res.status(200).json(orders)

    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', verifyToken, async (req, res) => {
    
    try {
        const singleOrder = await Order.findById(req.params.id);
        res.status(200).json(singleOrder)

    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', verifyToken, async (req, res) => {
    const newOrder = new Order({
        productId: req.body.productId,
        userID: req.user.id,
        costumerName: req.body.costumerName,
        costumerAddress: req.body.costumerAddress,
        costumerPhoneNo: req.body.costumerPhoneNo,
        qty: req.body.qty,
        TotalAmount: req.body.totAmt
    })
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder)

    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', verifyToken, async (req, res) => {
    
    try {
        const deleteOrder = await Order.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteOrder)

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;