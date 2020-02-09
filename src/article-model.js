(function(exports) {
  function Article(article) {
    this.article = article
  }

  Article.prototype.showArticle = function() {
    return this.article;
  }

  exports.Article = Article
})(this)