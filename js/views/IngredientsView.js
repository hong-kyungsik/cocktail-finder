export default class Ingredients{
    constructor(data){
        this.data = data;
        this.element = $(`
        <li role="separator" class="mdc-list-divider"></li>
        <li class="mdc-list-item" tabindex="0">
            <span class="mdc-list-item__text">
                <span class="mdc-list-item__primary-text">${this.data.name}</span>
                <span class="mdc-list-item__secondary-text">${this.data.measure}</span>
            </span>
        </li>
        `)
    }
    render(target){
        target.append(this.element);
    }
}