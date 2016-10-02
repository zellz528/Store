class CartController < ApplicationController
  def new
  end

  def create
  end

  def list
    @products = Product.find(params[:ids])

  end
end
