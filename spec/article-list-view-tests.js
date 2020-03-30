(function testArticleListView() {
  var articleList = new ArticleList()
  var articleListView = new ArticleListView(articleList)
  var url = 'testURl'
  var image = 'image'
  articleList.addArticle('Test Article One', url, image)
  articleList.addArticle('Test Article Two', url, image)
  assert.isTrue(articleListView.makeHTML() === "<div id='headline'><img src=image><h5><a href=testURl>Test Article One</a></h5></div><div id='headline'><img src=image><h5><a href=testURl>Test Article Two</a></h5></div>" )
  console.log("ArticleListView passing")
})();
