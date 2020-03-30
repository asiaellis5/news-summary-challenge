(function(exports) {
  function Article(article, id) {
    this.article = article
    this.id = id 
  }

  Article.prototype.showArticle = function() {
    return this.article;
  }

  exports.Article = Article
})(this)