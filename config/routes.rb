Rails.application.routes.draw do

  get 'store/index'

  root 'store#index'

  get 'search', controller: :products, action: :search, as: :search_products
  get 'products/info', controller: :products, action: :info, as: :products_info

  resources :products, path: 'admin/products'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
