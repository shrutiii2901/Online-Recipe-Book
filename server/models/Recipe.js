const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    email: {
        type: String
    },
    ingredients: {
        type: Array,
        required: 'This field is required .'
    },
    category: {
        type: String,
        enum : ['BreaKfast','Lunch' , 'Snacks' , 'Dinner' , 'Dessert' ],
    },
    image: {
        type: String
    },

});

recipeSchema.index({name : 'text' , description : 'text' });
// WildCard
// recipeSchema.index({"$**" : 'text' });

module.exports = mongoose.model('Recipe', recipeSchema);