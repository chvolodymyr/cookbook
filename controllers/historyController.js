const errorHandler = require('../utils/errorHandler');
const Recipe = require('../models/Recipe');
const historyRecipe = require('../models/Recipe_history');


module.exports.getHistory = async function (req, res) {
    try {
        const history = await historyRecipe.find({});
        res.status(200).json(history)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.getHistoryByRecipeId  = async function(req,res){
    try{
        const version =[];
        const histories = await historyRecipe.findOne({d: req.params.recipeId});
        for (let recipeId of histories.d){
            const recipies = await Recipe.find(recipeId);
            for (let recipe of recipies){
            version.push(recipe)
        } }
        res.status(200).json(version)

    }catch (e) {
        errorHandler(res,e)
    }
};