(function(exports) {
  function ArticleList() {
    this.articles = []
  }

  ArticleList.prototype.showArticles = function() {
    return this.articles
  }

  ArticleList.prototype.addArticle = function(headline, url, image) {
    var id = this.articles.length
    var article = new Article(headline, id, url, image)
    this.articles.push(article)
  }
  exports.ArticleList = ArticleList
})(this);