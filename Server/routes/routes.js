const express = require('express')
const router = express();
const newProductModel = require('../models/addProduct');



router.post('/api/newProduct', (req, res) => {
    const newProduct = new newProductModel({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        category: req.body.category,

    });

    newProduct.save()
        .then(item => {
            res.json(item)
        })
        .catch(err => {
            res.status(400).json({ msg: "There is an error", err });
        });
});


//Get All
router.get('/api/allproducts', async (req, res) => {
    const findItem = await newProductModel.find();
    res.json(findItem)
})

//Get Single
router.get('/api/oneproduct/:id', async (req, res) => {
    const findProduct = await newProductModel.findById(req.params.id);
    res.json(findProduct)
})


//Update
router.patch('/api/updateproduct/:id', async (req, res) => {

    const findProduct = await newProductModel.updateOne(
        {_id: req.params.id }, {
        $set: [
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            category: req.body.category
        ]
    });
    res.json(findProduct);



});


//Create
router.post('/api/item', async (req, res) => {
    const item = new newProductModel({ ...req.body });
    await item.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


//Delete
router.delete('/api/item/:id', async (req, res) => {
    const { id } = req.params.id
    await newProductModel.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})



module.exports = router