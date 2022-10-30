function addSearchButtonClickEvent(){
    $('#search-button').on('click', function(){
        var keyword = $('#search-keyword-input').val();
        $.ajax({
            type: "GET",
            url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+keyword,
            data: 'json'
        }).done(function(res){
            var cocktailList = $('#cocktail-list');
            cocktailList.empty();
            for(var i=0;i<res.drinks.length;i++){
                var cocktailNode = `<div class="mdc-card">
                <div class="mdc-card__primary-action" tabindex="0">
                    <div class="mdc-card__media mdc-card__media--16-9"
                        style="background-image: url(&quot;`+res.drinks[i].strDrinkThumb+`&quot;);">
                    </div>
                    <div class="mdc-card__content">
                        <h2 class="mdc-typography mdc-typography--headline6">`+res.drinks[i].strDrink+`</h2>
                        <h3 class="mdc-typography mdc-typography--subtitle2">`+res.drinks[i].strInstructions+`</h3>
                    </div>
                    <div class="mdc-card__content mdc-typography mdc-typography--body2">
                        <ul class="mdc-list mdc-list--two-line" name="ingredients-list-`+i+`">`
                for(var j=1;j<=15;j++){
                    if(res.drinks[i]['strIngredient'+j]===null) break;
                    cocktailNode += `<li role="separator" class="mdc-list-divider"></li>
                    <li class="mdc-list-item" tabindex="0">
                        <span class="mdc-list-item__text">`+
                            `<span class="mdc-list-item__primary-text">`+(res.drinks[i]['strIngredient'+j]).trim()+`</span>`+
                            `<span class="mdc-list-item__secondary-text">`+(res.drinks[i]['strMeasure'+j] ?? '').trim()+`</span>`+
                        `</span>
                    </li>
                    `;
                }
                cocktailNode+=`</ul>
                        </div>
                    </div>
                </div>`
                cocktailList.append($(cocktailNode));
                const list = new MDCList(document.querySelector('ul[name=ingredients-list-'+i));
            }
        }).fail(function(err){
            alert('오류가 발생하였습니다.');
        })
    });
}

$(function(){
    addSearchButtonClickEvent();
});