(function(exports) {
  function Article(article, id, url, image, body) {
    this.article = article
    this.id = id 
    this.url = url
    this.image = image
    this.body = body
  }

  Article.prototype.showArticle = function() {
    return this.article;
  }

  Article.prototype.showUrl = function() {
    return this.url;
  }

  Article.prototype.showImage = function() {
    return this.image;
  }

  Article.prototype.showBody = function() {
    return this.body;
  }

  exports.Article = Article
})(this)