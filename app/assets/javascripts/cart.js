// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {

  var cart_products = $('#cart_products');
  console.log('products' + cart_products);
  //console.log('cookie',  readCart());

  var content = readCart();
console.log(content);
  var keys = Object.keys(content);

  var idsForQuery = '';
  for (var i = 0; i < keys.length; i++) {
    idsForQuery += '&ids[]=' + keys[i];
  }
var productTr = $('<tr>');
var removeProductsLink = $('<a href="" class="remove-from-cart btn btn-success btn-sm">Eemalda ostukorvist</a>');
  $.get('/products/info?' + idsForQuery, function(items) {
    for (var i = 0; i < items.length; i++) {
      console.log(items[i].name);
    //  productTr = $('<tr>');
      var tableContentName = $('<th>' +items[i].name + '</th>');
      var tableContenctDesc = $('<th>' +items[i].description + '</th>');

      productTr.append(tableContentName);
      productTr.append(tableContenctDesc);
    //  productTr.append(removeProductsLink);
  //    var removeProductsLink = $('<a href="#" class="remove-from-cart btn btn-success btn-sm">Eemalda ostukorvist</a>');


    }
  });

  //var productDesc = $('<th>' +' Description ' + '</th>');
  //var productDev = $('<th>' + document.cookie+ '</th>');

  //productTr.append(productName);
  //productTr.append(productDesc);
  //productTr.append(productDev);

  //productThead.append(productTr);
  //productTable.append(productThead);

  cart_products.append(productTr);
});

//<tbody class="row" id="cart_products">
  //<% @products.each do |product| %>
    //<tr>
      //<td><%= product.name %></td>
    //  <td><%= product.description %></td>
  //    <td><%= product.device %></td>
//    </tr>
//  <% end %>
//</tbody>

//for (i = 0; i < productList.length; i++) {
  //var productRectangle  = $('<div class="col-md-4">');

//var contents =  document.cookie;
//console.log('test1: ' + contents);
//productRectangle.append('<h2>'+ link.data +'</h2>');
//  productRectangle.append('<p>'+ productList[i].description +'</p>');
//  var cartLink = $('<a href="#" class="add-to-cart btn btn-success btn-sm">Lisa ostukorvi</a>');
//  cartLink.data('product-id', productList[i].id);
//  productRectangle.append(cartLink);
  //cart_products.append(productRectangle);

  //var id = link.data('product-id');
