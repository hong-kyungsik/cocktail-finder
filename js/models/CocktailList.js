import Cocktail from './Cocktail.js'
export default class CocktailList{
    constructor(ajaxUtil){
        this.ajaxUtil = ajaxUtil;
        this.cocktails = [];
    }
    
    fetchAll(keyword, done, fail, always){
        this.cocktails = [];
        this.ajaxUtil.get('/api/json/v1/1/search.php', {s: keyword})
        .done((res)=>{
            for (const drink of res.drinks) {
                this.cocktails.push(new Cocktail(drink));    
            }
            if(done){
                done(res);
            }
        })
        .fail((err)=>{
            if(fail){
                fail(res);
            }
        })
        .always(()=>{
            if(always){
                always();
            }
        });
    }
}