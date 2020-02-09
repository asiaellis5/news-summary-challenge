(function(exports) {
  function ArticleList() {
    this.articles = []
  }

  ArticleList.prototype.showArticles = function() {
    return this.articles
  }

  ArticleList.prototype.addArticle = function(headline) {
    var article = new Article(headline)
    this.articles.push(article)
  }
  exports.ArticleList = ArticleList
})(this)