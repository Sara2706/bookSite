const router = require('express').Router();
const verifyToken = require('../../verifyToken/verifyToken');
const Product = require('../../model/product/productModel');


router.post('/', async (req, res) => {
    const newProduct = new Product(req.body)
    try {
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/', async (req, res) => {
    const search = req.query.search
    const filter = req.query.filter
    let Products;
    try {
        if (search) {
            if (filter) {
                Products = await Product.aggregate([
                    { $match: { catogry: filter,productName:{ $regex: search.toString()} } }

                ]);
            } else {
                Products = await Product.find({ productName: { $regex: search.toString() } });
            }
        } else {
            if (filter) {
                Products = await Product.aggregate([
                    { $match: { catogry: filter } }

                ]);
            } else {
                Products = await Product.find();
            }

        }
        res.status(200).json(Products)

    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', verifyToken, async (req, res) => {
    try {
        const Products = await Product.findById(req.params.id);
        res.status(200).json(Products)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/random', verifyToken, async (req, res) => {
    try {
        const saveProduct = await Product.aggregate([
            { $sample: { size: 1 } }
        ]);
        res.status(200).json(saveProduct)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;