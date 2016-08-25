Rails.application.routes.draw do

  get 'store/index'

  root 'store#index'


  resources :products, path: 'admin/products'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
