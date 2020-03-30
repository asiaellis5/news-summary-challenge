(function testArticleListView() {
  var articleList = new ArticleList()
  var articleListView = new ArticleListView(articleList)
  var url = 'testURl'
  articleList.addArticle('Test Article One', url)
  articleList.addArticle('Test Article Two', url)
  assert.isTrue(articleListView.makeHTML() === "<ul><li><div><a href=testURl>Test Article One</a></div></li><li><div><a href=testURl>Test Article Two</a></div></li></ul>" )
  console.log("ArticleListView passing")
})();
