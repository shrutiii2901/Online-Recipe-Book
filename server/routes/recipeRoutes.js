const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App routes
 */
router.get('/', recipeController.homepage);
router.get('/categories', recipeController.exploreCategories);
router.get('/recipe/:id' , recipeController.exploreRecipe );
router.get('/categories/:id', recipeController.exploreCategoriesByID);
router.post('/search', recipeController.searchRecipe);

router.get('/explore-latest', recipeController.exploreLatest);

module.exports = router;
