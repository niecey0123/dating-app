class Owner < ApplicationRecord
    has_many :pets, through: :matchs 
end
