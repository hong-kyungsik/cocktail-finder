export default class AjaxUtil{
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }
    get(path, data){
        return $.ajax({
            type: "GET",
            url: this.baseUrl+path,
            data: data
        });
    }
}