
const express = require('express');
const router = express.Router();

const Sneaker = require('../../models/Sneaker');

// GET: Retrieve all sneakers from MongoDB
router.get('/', async (req, res) => {
    try {
        const sneakers = await Sneaker.find().sort({ id: 1 });
        res.status(200).json(sneakers);
    } catch (error) {
        res.status(500).json({
            message: 'Unable to retrieve sneakers',
            error: error.message
        });
    }
});

// POST: Add a new sneaker
router.post('/', async (req, res) => {
    try {
        const lastSneaker = await Sneaker.findOne().sort({ id: -1 });

        const newSneaker = new Sneaker({
            ...req.body,
            id: lastSneaker ? lastSneaker.id + 1 : 1
        });

        const savedSneaker = await newSneaker.save();

        res.status(201).json({
            message: 'Sneaker added successfully',
            sneaker: savedSneaker
        });
    } catch (error) {
        res.status(400).json({
            message: 'Unable to add sneaker',
            error: error.message
        });
    }
});

// PUT: Update an existing sneaker
router.put('/:id', async (req, res) => {
    try {
        const updatedSneaker = await Sneaker.findOneAndUpdate(
            { id: Number(req.params.id) },
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!updatedSneaker) {
            return res.status(404).json({
                message: 'Sneaker not found'
            });
        }

        res.status(200).json({
            message: 'Sneaker updated successfully',
            sneaker: updatedSneaker
        });
    } catch (error) {
        res.status(400).json({
            message: 'Unable to update sneaker',
            error: error.message
        });
    }
});

// DELETE: Remove a sneaker
router.delete('/:id', async (req, res) => {
    try {
        const deletedSneaker = await Sneaker.findOneAndDelete({
            id: Number(req.params.id)
        });

        if (!deletedSneaker) {
            return res.status(404).json({
                message: 'Sneaker not found'
            });
        }

        res.status(200).json({
            message: 'Sneaker deleted successfully',
            sneaker: deletedSneaker
        });
    } catch (error) {
        res.status(500).json({
            message: 'Unable to delete sneaker',
            error: error.message
        });
    }
});

module.exports = router;
