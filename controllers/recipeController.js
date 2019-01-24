const errorHandler = require('../utils/errorHandler');
const Recipe = require('../models/Recipe');
const historyRecipe = require('../models/Recipe_history');


module.exports.getAll = async function (req, res) {
    try {
        const LastVersionArr = [];
        const history = await historyRecipe.find({}).sort({t: -1});
        for (version of history) {
            const lastVersionId = version.d[version.d.length - 1];
            console.log(lastVersionId);
            const recipe = await Recipe.findOne({_id: lastVersionId});
            if (recipe !== null) {
                LastVersionArr.push(recipe)
            }
        }

        res.status(200).json(LastVersionArr)
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.getById = async function (req, res) {
    try {
        const history = await historyRecipe.findOne({d: req.params.id});
        const lastVersion = history.d[history.d.length - 1];
        const recipe = await Recipe.findOne({_id: lastVersion});
        res.status(200).json(recipe);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.remove = async function (req, res) {
    try {

        const history = await historyRecipe.findOneAndUpdate({d: req.params.id}, {
            o: 'remove'
        });
        for (version of history.d) {
            await Recipe.remove({_id: version._id});
        }


        res.status(200).json(history);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.create = async function (req, res) {
    const recipe = new Recipe({
        title: req.body.title,
        description: req.body.description,
        time: req.body.time,
        portions: req.body.portions,
        ingredients: req.body.ingredients,
        amount: req.body.amount,
        imgSource: req.file ? req.file.path : '',
        difficaltly: req.body.difficaltly,
        category: req.body.category
    });

    console.log(req.body.category);
    const history = await historyRecipe.create({
        o: 'create',
    });
    history.d.push(recipe);
    try {
        await history.save();
        await recipe.save();
        res.status(201).json(recipe);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.update = async function (req, res) {
    try {
        console.log(req.body.recipe);
        const updatedRecipe = await new Recipe({
            title: req.body.title,
            description: req.body.description,
            time: req.body.time,
            ingredients: req.body.ingredients,
            amount: req.body.amount,
            portions: req.body.portions,
            imgSource: req.file ? req.file.path : '',
            difficaltly: req.body.difficaltly,
            category: req.body.category
        });
        const history = await historyRecipe.findOneAndUpdate({d: req.params.id}, {
            o: 'update'
        }, {new: true});
        history.d.push(updatedRecipe._id);
        console.log(req.body.recipe);
        await updatedRecipe.save();
        await history.save();
        res.status(200).json(updatedRecipe)
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.getByCategory = async function (req, res) {
    try {
        const recipes = await Recipe.find({
            category: req.params.categoryId,
        });
        console.log(recipes);
        res.status(200).json(recipes)
    } catch (e) {
        errorHandler(res, e)
    }
};


module.exports.getAllHistory = async function (req, res) {
    try {
        const LastVersionArr = [];
        const history = await historyRecipe.find({}).sort({t: -1});
        for (version of history) {
            const lastVersion = version.d[version.d.length - 1];
            console.log(lastVersion);
            const recipe = await Recipe.findOne({_id: lastVersion});
            if (recipe !== null) {
                LastVersionArr.push(recipe)
            }
        }
        res.status(200).json(LastVersionArr)
    } catch (e) {
        errorHandler(res, e);
    }
};






