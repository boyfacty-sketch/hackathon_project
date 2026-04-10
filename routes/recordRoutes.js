const express = require('express');
const router = express.Router();
const Record = require('../models/Record');

// Route to add a new medical record
router.post('/add', async (req, res) => {
    try {
        const newRecord = new Record(req.body);
        const savedRecord = await newRecord.save();
        res.status(201).json({
            message: "Record saved successfully!",
            data: savedRecord
        });
    } catch (err) {
        res.status(400).json({
            error: "Failed to save record",
            details: err.message
        });
    }
});

// Route to fetch all medical records
router.get('/all', async (req, res) => {
    try {
        const records = await Record.find();
        res.status(200).json(records);
    } catch (err) {
        res.status(500).json({
            error: "Failed to fetch records",
            details: err.message
        });
    }
});

module.exports = router;