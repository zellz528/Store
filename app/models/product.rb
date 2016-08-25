class Product < ApplicationRecord
  validates :name, :presence => true

  def self.search(search_term)
    return all unless search_term.present?
    terms = ::ApplicationHelper::SearchTermsBuilder.new(text_search_query, search_term)
    where(terms.query, terms.params)
  end

  def self.text_search_query
    '(products.name COLLATE UTF8_GENERAL_CI like(:word)
    OR products.description COLLATE UTF8_GENERAL_CI like(:word))'
  end
end
