Rails.application.routes.draw do

  get 'cart/new'
  #get 'cart/info', controller: :products, action: :info, as: :cart_info

  get 'store/index'

  root 'store#index'
  get 'cart/show', controller: :cart, action: :show, as: :show_cart

  get 'search', controller: :products, action: :search, as: :search_products
  get 'products/info', controller: :products, action: :info, as: :products_info
  resources :products, path: 'admin/products'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
