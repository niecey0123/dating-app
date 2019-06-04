class Pet < ApplicationRecord
    has_many :owners, through: :matches
end
