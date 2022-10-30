export default class SearchButton{
    constructor(element){
        this.element = element;
    }
    addClickHandler(handler){
        this.element.off('click').on('click', handler);
    }
}