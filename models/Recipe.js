const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imgSource: {
        type: String,
        default: ''
    },

    description: {
        type: String
    },
    time: {
        type: String
    },
    portions: {
        type: String
    },
    ingredients: {
        type: String
    },
    difficaltly: {
        type: String
    },
    category: {
        ref: 'category',
        type: Schema.ObjectId
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('recipe', recipeSchema);