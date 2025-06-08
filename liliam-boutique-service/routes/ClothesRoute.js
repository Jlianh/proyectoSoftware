const express = require('express');
const ClothesController = require('../controllers/ClothesController')
const clothesRouter = express.Router();

const clothesController = new ClothesController();

clothesRouter.get('/allClothes', clothesController.getClothes);

clothesRouter.get('/findById/:id', clothesController.getClothesById);

clothesRouter.post('/addClothes/', clothesController.addSingleClothes);

clothesRouter.patch('/editClothes/:id', clothesController.editClothes)

clothesRouter.delete('/deleteClothes/:id', clothesController.deleteClothes)

module.exports = clothesRouter;
