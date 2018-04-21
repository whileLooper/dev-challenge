const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    title: String,
    Awards: Array,
    TitleId: Number,
    ReleaseYear: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Movie', MovieSchema, 'Titles');