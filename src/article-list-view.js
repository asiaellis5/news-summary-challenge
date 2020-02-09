"use strict";

(function(exports){
  function ArticleListView(articleList) {
    this.articleList = articleList
  }

  ArticleListView.prototype.makeHTML = function() {
    var array = ["<ul>"]
    for(var i = 0; i < this.articleList.articles.length; i++) {
      array.push("<li><div>" + this.articleList.articles[i].showArticle() + "</div></li>")
    }
    array.push("</ul>")
    return array.join("")
  }

  exports.ArticleListView = ArticleListView
})(this)