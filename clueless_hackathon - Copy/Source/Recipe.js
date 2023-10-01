class Recipe {
    /** A class that defines a Recipe card.
     * 
     * @param {String} title  
     * @param {String[]} ingredients 
     * @param {String[]} instructions 
     */
    constructor(title, ingredients, instructions) {
        this.title = title,
        this.ingredients = ingredients;
        this.instructions = instructions;
    }

    getTitle() {
        return this.title;
    }

    getIngredients(){
        return this.ingredients;
    }

    getInstructions(){
        return this.instructions;
    }

    compareTo(other){
        return this.title.localeCompare(other.title); 
    }
}

function addRecipe(recipe){
    recipeList.push(recipe);
}

function addRecipe(title, ingredients, instructions){
    recipeList.push(new Recipe(title, ingredients, instructions));
}

var recipeList = [];
let button = document.getElementById("button");
button.addEventListener("click", function() {
    let inputs = document.getElementsByClassName("Input");
    addRecipe(new Recipe(inputs[0], inputs[1], inputs[2]));
});
