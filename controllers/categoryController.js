const errorHandler = require('../utils/errorHandler');
const Category = require('../models/Category');

module.exports.getAll = async (req, res) => {
    try {
        const categorys = await Category.find({});
        res.status(200).json(categorys)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.create = async (req, res) => {

    const category = await new Category({
        name: req.body.name
    });
    try {
        await category.save();
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
    s
}