const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeHistorySchema = new Schema({
    t: {
        type: Date,
        default: Date.now()
    },

    o:{
        type: String
    },
    d:[{
        type: Schema.Types.ObjectId,
        ref: 'recipes'
    }]
});

module.exports = mongoose.model('recipes_history', recipeHistorySchema);