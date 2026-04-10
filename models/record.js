const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Report', 'Prescription'], // Sirf ye do options
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: String,
    fileUrl: String, // Report ki photo ya PDF ka link yahan rahega
    patientName: String
});

module.exports = mongoose.model('Record', RecordSchema);