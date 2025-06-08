const ClothesSchema = require('../models/Clothes');

class ClothesController {

    constructor() { }

    async getClothes(req, res, next) {
        let clothes = await ClothesSchema.find();
        res.json(clothes)
    }

    async getClothesById(req, res) {
        let clothes = await ClothesSchema.findById(req.params.id);
        res.json(clothes)
    }

    async addSingleClothes(req, res) {

        let Clothes = ClothesSchema({
            identification: req.body.identification,
            name: req.body.name,
            price: req.body.price,
            color: req.body.color,
            size: req.body.color,
            reviews: req.body.reviews
        })
        Clothes.save().then((result) => {
            res.json({ "status": "success", "message": "Clothes created successfully", "data" : result });
        }).catch((err) => {
            console.log(err);
            res.json({ "status": "failed", "message": "Error creating the Clothes" });
        });
    }

    async editClothes(req, res) {
        var id = req.params.id;
        
        var updatedClothes = {
            identification: req.body.identification,
            name: req.body.name,
            price: req.body.price,
            color: req.body.color,
            size: req.body.color,
            reviews: req.body.reviews
        };

        console.log(id, updatedClothes);

        ClothesSchema.findByIdAndUpdate(id, updatedClothes, { new: true }).then((result) => {
            res.json({ "status": "success", "message": "Clothes updated successfully", "data" : result });
        }).catch((error) => {
            res.json({ "status": "failed", "message": "Clothes updating falied"});
        });
    }

    async deleteClothes(req, res){
        var id = req.params.id;

        ClothesSchema.findByIdAndDelete({ _id: id }).then(() => {
            res.json({ "status": "success", "message": "Clothes deleted successfully" });
        }).catch((error) => {
            res.json({ "status": "failed", "message": "Error deleting Clothes" });
        });
    }
}

module.exports = ClothesController;