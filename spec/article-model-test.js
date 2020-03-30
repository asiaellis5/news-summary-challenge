(function testArticle(){
  var article = new Article('Test Article One', 0)
  assert.isTrue(article.showArticle() === 'Test Article One')
  console.log("testArticle passing") 
})();