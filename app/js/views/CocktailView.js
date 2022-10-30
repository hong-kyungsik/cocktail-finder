export default class Cocktail{
    constructor(data){
        this.data = data;
        this.element = $(`
            <div class="mdc-card">
                <div class="mdc-card__primary-action" tabindex="0">
                    <div class="mdc-card__media mdc-card__media--16-9"
                        style="background-image: url(&quot;${this.data.thumbnail}&quot;);">
                    </div>
                    <div class="mdc-card__content">
                        <h2 class="mdc-typography mdc-typography--headline6">${this.data.name}</h2>
                        <h3 class="mdc-typography mdc-typography--subtitle2">${this.data.instructions??''}</h3>
                    </div>
                    <div class="mdc-card__content mdc-typography mdc-typography--body2">
                        <ul class="mdc-list mdc-list--two-line" name="ingredients-list">
                        </ul>
                    </div>
                </div>
            </div>
        `);
        this.ingredients = this.element.find('ul[name=ingredients-list]');
    }

    render(target){
        target.append(this.element);
    }

    addIngredient(ingredient){
        ingredient.render(this.ingredients);
    }
}