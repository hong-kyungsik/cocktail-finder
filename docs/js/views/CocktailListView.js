export default class CocktailList{
    constructor(element){
        this.element = element;
    }
    empty(){
        this.element.empty();
    }
    addCocktail(cocktail){
        cocktail.render(this.element);
    }
}