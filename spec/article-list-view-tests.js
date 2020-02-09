(function testArticleListView() {
  var articleList = new ArticleList()
  var articleListView = new ArticleListView(articleList)
  articleList.addArticle('Test Article One')
  articleList.addArticle('Test Article Two')
  assert.isTrue(articleListView.makeHTML() === "<ul><li><div>Test Article One</div></li><li><div>Test Article Two</div></li></ul>" )
  console.log("ArticleListView passing")
})();
