class Owner < ApplicationRecord
    has_one_attached :image
    has_many :matches
    has_many :pets, through: :matches 
end
