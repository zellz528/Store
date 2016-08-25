// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var searchProducts = function() {
  var query = $('#product-search').val();
  $.get('/search?q=' + query, function(productList) {

    var products = $('#products');
    products.empty();
    console.log(productList);

    for (i = 0; i < productList.length; i++) {
      var productRectangle  = $('<div class="col-md-4">');
      productRectangle.append('<h2>'+ productList[i].name +'</h2>');
      productRectangle.append('<p>'+ productList[i].description +'</p>');
      products.append(productRectangle);
    }
  });

};

var searchTimeout = false;

var ready = function() {
  $('#product-search').keyup(function() {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    searchTimeout = setTimeout(searchProducts, 150);
  });
  searchProducts();
};
$(document).on('ready', ready);
$(document).on('page:load', ready);
