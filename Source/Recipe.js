var recipeList = [];


class Recipe {
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
}

function addRecipe(recipe){
    recipeList.push(recipe);
}

function addRecipe(title, author, ingredients, instructions){
    recipeList.push(new Recipe(title, author, ingredients, instructions));
}

