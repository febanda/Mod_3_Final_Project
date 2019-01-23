class Workout < ApplicationRecord
    has_many :stats 
    has_many :exercises, through: :stats 

    validates :name, presence:true 
end
