class Pet < ApplicationRecord
    has_many :matches
    has_many :owners, through: :matches
end
