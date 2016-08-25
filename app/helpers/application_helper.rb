module ApplicationHelper

  class SearchTermsBuilder
    attr_accessor :params, :query_strings, :main_query

    def initialize(main_query, search_words)
      @main_query = main_query
      @query_strings = []
      @params = {}
      get_conditions(search_words.split(/\ /))
    end

    def query
      query_strings.join(" AND ")
    end

    private

    def get_conditions(search_words)
      search_words.each_with_index do |word, index|
        if word.strip.length != 0
          word_query(word, index)
        end
      end
    end

    def word_query(word, index)
      word_name = "word#{index}"
      query_strings << main_query.gsub(/word/, word_name)
      params[word_name.to_sym] = "%#{word}%"
    end
  end

end
