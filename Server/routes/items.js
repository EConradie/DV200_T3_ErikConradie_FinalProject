const express = require('express')

const MusicSchema = require('../storage/items')

const router = express();

//Get All
router.get('/api/storage/', async (req, res) => {
    const findItem = await ItemsSchema.find();
    res.json(findItem)
})

//Get Single
router.get('/api/storage/:id', async (req, res) => {
    const findItem = await ItemsSchema.findById(req.params.id);
    res.json(findItem)
})

//Update
router.put('/api/item/:id', async (req, res) => {
    const {id} = req.params.id
    await ItemsSchema.updateOne({id}, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


//Create
router.post('/api/item', async (req, res) => {
    const tune = new ItemsSchema({ ...req.body });
    await tune.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


//Delete
router.delete('/api/item/:id', async (req, res) => {
    const { id } = req.params.id
    await ItemsSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})



module.exports = router