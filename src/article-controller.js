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

  ArticleController.prototype.getArticle = function() {
    var that = this
    var request = new XMLHttpRequest()
    
    request.open('GET', , true)

    request.onload = function() {
   
    var data = JSON.parse(this.response)

      if (request.status >= 200 && request.status < 300) {
        var articles = data.response.results

        for(var i = 0; i < articles.length; i++) {
          var id = that.articleList.articles.length
          that.articleListView.articleList.articles.push(new Article(articles[i].webTitle, id))
        }
        that.insert('app')
      } else {
        console.log('error')
      }
    }
    request.send()
  }



  exports.ArticleController = ArticleController
})(this)