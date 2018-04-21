const mongoose = require('mongoose');

// mongoose schema
const MovieSchema = mongoose.Schema({
    _id: String,
    title: String,
    Awards: Array,
    TitleId: Number,
    ReleaseYear: Number
}, {
    timestamps: true
});

// export mongoose model
module.exports = mongoose.model('Movie', MovieSchema, 'Titles');