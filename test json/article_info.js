var xhr = new XMLHttpRequest();
var url = "article_info.json";
xhr.open("GET", url, true);
xhr.responseType = "json";

var tittleHTML = document.getElementById("tittle");
tittleHTML.style.cssText = "text-align: center; font-weight: bold;";


xhr.onload = function () {
  var articles = xhr.response.articles;
  var articlesDiv = document.getElementById("articles");

  articles.forEach(function(article){
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var desc = document.createElement('p');
    desc.textContent = article.description;

    var howto = document.createElement('h3');
    howto.textContent = 'How To Archive:';

    var howlist = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way){
    var itemlist = document.createElement('li');
    itemlist.textContent = way;
    howlist.appendChild(itemlist);
    });

    var benerfit = document.createElement('h3');
    benerfit.textContent = 'benerfit: ';

    var benerfitlist = document.createElement('ul');
    article.benefits.forEach(function(bener){
    var itemlist = document.createElement('li');
    itemlist.textContent = bener;
    benerfitlist.appendChild(itemlist);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(desc);
    articleDiv.appendChild(howto);
    articleDiv.appendChild(howlist);
    articleDiv.appendChild(benerfit);
    articleDiv.appendChild(benerfitlist);
    articlesDiv.appendChild(articleDiv);
  });
};

xhr.send();