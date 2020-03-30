(function testArticleListView() {
  var articleList = new ArticleList()
  var articleListView = new ArticleListView(articleList)
  articleList.addArticle('Test Article One')
  articleList.addArticle('Test Article Two')
  assert.isTrue(articleListView.makeHTML() === "<ul><li><div><a href='#0'>Test Article One</a></div></li><li><div><a href='#1'>Test Article Two</a></div></li></ul>" )
  console.log("ArticleListView passing")
})();
