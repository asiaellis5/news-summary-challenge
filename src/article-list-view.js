"use strict";

(function(exports){
  function ArticleListView(articleList) {
    this.articleList = articleList
  }

  ArticleListView.prototype.makeHTML = function() {
    var array = []
    for(var i = 0; i < this.articleList.articles.length; i++) {
      array.push("<div id='headline'><img src=" + this.articleList.showArticles()[i].showImage() + "><h5><a href=" + this.articleList.showArticles()[i].showUrl() + ">" + this.articleList.articles[i].showArticle() + "</a></h5></div>")
    }
    return array.join("")
  }

  exports.ArticleListView = ArticleListView
})(this)
