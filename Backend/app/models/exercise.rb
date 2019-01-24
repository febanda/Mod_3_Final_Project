class Exercise < ApplicationRecord
    has_many :stats 
    belongs_to :workout

    # accepts_nested_attributes_for :stats
    validates :name, presence: true 
    validates :category, presence: true
    validates :main_muscle_worked, presence: true
    validates :equipment, presence: true
    validates :level, presence: true
    validates :video, presence: true 
end
