(function(exports) {
  function ArticleController(articleListView, doc = document) {
    this.articleListView = articleListView
    this.articleList = this.articleListView.articleList
    this.document = doc
  }

  ArticleController.prototype.addArticle = function(headline) {
    this.articleList.addArticle(headline)
  }

  ArticleController.prototype.insert = function(id) {
    var message = this.articleListView.makeHTML()
    var element = this.document.getElementById(id)
    element.innerHTML = message
  }


  exports.ArticleController = ArticleController
})(this)