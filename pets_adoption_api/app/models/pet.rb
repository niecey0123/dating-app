class Pet < ApplicationRecord
    has_one_attached :image
    has_many :matches
    has_many :owners, through: :matches
end
