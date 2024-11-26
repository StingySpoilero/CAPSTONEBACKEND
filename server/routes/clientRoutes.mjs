// server/routes/clientRoutes.mjs
import express from 'express';
import Client from '../models/Client.mjs';
import API from '../api.mjs';

const router = express.Router();

// Get all clients
router.get('/', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new client
router.post('/', async (req, res) => {
    const client = new Client(req.body);
    try {
        const savedClient = await client.save();
        res.status(201).json(savedClient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a client
router.put('/:id', async (req, res) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedClient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a client
router.delete('/:id', async (req, res) => {
    try {
        await Client.findByIdAndDelete(req.params.id);
        res.json({ message: 'Client deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;