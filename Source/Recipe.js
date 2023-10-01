class Recipe {
    /** A class that defines a Recipe card.
     * 
     * @param {String} title 
     * @param {String} author 
     * @param {String[]} ingredients 
     * @param {String} instructions 
     */
    constructor(title, author, ingredients, instructions) {
        this.title = title,
        this.author = author;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
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

function addRecipe(title, author, ingredients, instructions){
    recipeList.push(new Recipe(title, author, ingredients, instructions));
}

var recipeList = [];
let button = document.getElementById('button');
button.addEventListener("click", function() {
    let inputs = document.getElementsByClassName("Input");
    addRecipe(new Recipe(inputs[0], inputs[1], inputs[2], inputs[3]));
});
