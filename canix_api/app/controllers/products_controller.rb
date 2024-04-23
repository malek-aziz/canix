class ProductsController < ApplicationController
  def index
    products = Product.grouped_by_category
    render json: products
  end

  def create
    if Product.bulk_upload(params[:file].path)
      head :created
    else
      render json: { error: 'Failed to upload products' }, status: :unprocessable_entity
    end
  end
end
