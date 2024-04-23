require 'csv'

class Product < ApplicationRecord
  validates :product_id, :date, :weight, :unit, presence: true

  scope :grouped_by_category, -> {
    all.group_by(&:category).transform_values do |products|
      { products: products, total_weight: total_weight_for(products) }
    end
  }

  def self.total_weight_for(products)
    products.sum { |product| product.adjusted_weight }.round(3)
  end

  def self.bulk_upload(file_path)
    products_attributes = []
    CSV.foreach(file_path, headers: true) do |row|
      products_attributes << product_attributes_from_csv_row(row)
    end

    Product.upsert_all(products_attributes, unique_by: :product_id)
  end

  def adjusted_weight
    case unit
    when 'grams'
      weight / 1000.0
    when 'pounds'
      weight * 0.453592
    else
      weight
    end
  end

  private

  def self.product_attributes_from_csv_row(row)
    {
      date: row['date'],
      product_id: row['product_id'],
      weight: row['weight'].to_f.round(3),
      unit: row['unit'],
      category: row['product_id'][0..2]
    }
  end
end
