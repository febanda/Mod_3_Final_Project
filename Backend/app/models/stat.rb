class Stat < ApplicationRecord
  belongs_to :workout
  belongs_to :exercise
  
  validates :sets, presence: true
  validates :min_weight, presence: true
  validates :max_weight, presence: true
  validates :reps, presence: true 
end
