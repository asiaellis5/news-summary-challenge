(function(exports) {
  function ArticleSummary() {
  
  }

  ArticleSummary.prototype.getSummary = function() {
    var that = this
    var request = new XMLHttpRequest()
    
    request.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html" , true)

    request.onload = function() {
   
      var data = JSON.parse(this.response)
  
        if (request.status >= 200 && request.status < 300) {
          var result = data.response.results
          console.log(result)
        } else {
          console.log('error')
        }
      }
      request.send()
    }

exports.ArticleSummary = ArticleSummary
})(this);

