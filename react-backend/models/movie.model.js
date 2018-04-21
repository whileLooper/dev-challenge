const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    _id: String,
    title: String,
    Awards: Array,
    TitleId: Number,
    ReleaseYear: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Movie', MovieSchema, 'Titles');