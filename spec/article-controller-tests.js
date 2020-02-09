"use strict";

(function testAddArticleController() {
  var articleList = new ArticleList()
  var articleListView = new ArticleListView(articleList)
  var articleController = new ArticleController(articleListView)
  articleController.addArticle('Test Article One')
  articleController.addArticle('Test Article Two')
  assert.isTrue(articleController.articleList.articles[0].showArticle() == "Test Article One")
  assert.isTrue(articleController.articleList.articles[1].showArticle() == "Test Article Two")
  console.log("testAddArticleController passing")
})();

(function testInsert() {
  var fakeDiv = {
    innerHTML: ""
  }
  var fakeDocument = {
    getElementById: function(){
      return fakeDiv
    }
  }
  var articleList = new ArticleList()
  var articleListView = new ArticleListView(articleList)
  var articleController = new ArticleController(articleListView, fakeDocument)
  articleController.addArticle('Test Article')
  articleController.insert('test')
  assert.isTrue(fakeDiv.innerHTML.includes('Test Article'))
  console.log('testInsert passing')
})()