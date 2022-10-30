import AjaxUtil from './AjaxUtil.js'

//views
import KeywordView from './views/KeywordView.js'
import SearchButtonView from './views/SearchButtonView.js'
import CocktailView from './views/CocktailView.js'
import CocktailListView from './views/CocktailListView.js'
import IngredientsView from './views/IngredientsView.js'

//models
import CocktailList from './models/CocktailList.js'
import Keyword from './models/Keyword.js'

class App{
    constructor(
        keywordView, searchButtonView, cocktailListView,keyword,cocktailList
    ){
        this.views = {
            keyword: keywordView,
            searchButton: searchButtonView,
            cocktailList: cocktailListView
        };
        this.models = {
            keyword: keyword,
            cocktailList: cocktailList
        };
    }
    init(){
        this.views.keyword.addKeyupHandler(()=>{
            this.setKeyword();
        });
        this.views.searchButton.addClickHandler(()=>{
            this.search();
        });
    }
    setKeyword(){
        this.models.keyword.set(this.views.keyword.getKeyword());
    }
    search(){
        const keyword = this.models.keyword.get();
        this.views.cocktailList.empty();
        this.models.cocktailList.fetchAll(keyword, (res)=>{
            for (const cocktail of this.models.cocktailList.cocktails) {
                const cocktailView = new CocktailView(cocktail);
                this.views.cocktailList.addCocktail(cocktailView);
                for(const ingredient of cocktail.ingredients){
                    cocktailView.addIngredient(new IngredientsView(ingredient));
                }
            }
        }, (err)=>{
            alert('오류가 발생했습니다.');
        });
    }
}

$(function(){
    const ajaxUtil = new AjaxUtil('https://www.thecocktaildb.com');

    //views
    const keywordview = new KeywordView($('#search-keyword-input'));
    const searchButtonView = new SearchButtonView($('#search-button'));
    const cocktailListView = new CocktailListView($('#cocktail-list'));

    //models
    const keyword = new Keyword();
    const cocktailList = new CocktailList(ajaxUtil);

    const app = new App(
        keywordview, searchButtonView, cocktailListView, keyword, cocktailList
    );
    app.init();
});