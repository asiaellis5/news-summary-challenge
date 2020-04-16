(function(exports) {
  function ArticleSummary(article) {
    this.article = article
  }

  ArticleSummary.prototype.getSummary = function() {
    var that = this
    var request = new XMLHttpRequest()
    
    request.open('GET', `https://api.aylien.com/api/v1/summarize?url=${that.article.url}` , true)

    request.onload = function() {
   
      var data = JSON.parse(this.response)
  
        if (request.status >= 200 && request.status < 300) {
          var result = data
          console.log(result)
        } else {
          console.log('error')
        }
      }
      request.send()
    }

exports.ArticleSummary = ArticleSummary
})(this);

