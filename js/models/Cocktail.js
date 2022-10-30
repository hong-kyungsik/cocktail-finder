import Ingredients from "./Ingredients.js";

export default class Cocktail{
    constructor(data){
        this.id = data.idDrink;
        this.name = data.strDrink;
        this.instructions = data.strInstructions;
        this.thumbnail = data.strDrinkThumb;

        this.ingredients = [];
        for(let i=1;i<=15;i++){
            if(data['strIngredient'+i]===null) continue;
            this.ingredients.push(new Ingredients(
                data['strIngredient'+i],
                data['strMeasure'+i]??''
            ));
        }
    }
}
