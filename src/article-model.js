(function(exports) {
  function Article(article, id, url) {
    this.article = article
    this.id = id 
    this.url = url
  }

  Article.prototype.showArticle = function() {
    return this.article;
  }

  Article.prototype.showUrl = function() {
    return this.url;
  }

  exports.Article = Article
})(this)