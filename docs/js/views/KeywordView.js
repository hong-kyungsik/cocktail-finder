export default class Keyword{
    constructor(element){
        this.element = element;
    }
    getKeyword(){
        return this.element.val();
    }
    addKeyupHandler(handler){
        this.element.on('keyup', handler);
    }
    render(target){
        target.append(this.element);
    }
}