
(function testArticleList() {
  var articleList = new ArticleList()
  assert.isTrue(articleList.showArticles().length === 0)
  console.log('testArticleList passing')
})();

(function testAddNewArticle() {
  var articleList = new ArticleList()
  articleList.addArticle('Test Article One')
  articleList.addArticle('Test Article Two')
  assert.isTrue(articleList.showArticles().length === 2)
  assert.isTrue(articleList.showArticles()[0].article === 'Test Article One')
  assert.isTrue(articleList.showArticles()[1].article === 'Test Article Two')
  assert.isTrue(articleList.showArticles()[0].id === 0)
  assert.isTrue(articleList.showArticles()[1].id === 1)
  console.log('testAddNewArticle passing')
})();
