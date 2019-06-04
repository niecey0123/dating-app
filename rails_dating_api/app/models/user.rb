class User < ApplicationRecord
    has_one :account
    has_many :matches
    has_many :matchs, through: :matches
end
