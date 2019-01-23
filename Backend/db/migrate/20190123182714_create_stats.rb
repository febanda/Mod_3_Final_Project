class CreateStats < ActiveRecord::Migration[5.2]
  def change
    create_table :stats do |t|
      t.integer :sets
      t.integer :min_weight
      t.integer :max_weight
      t.integer :reps
      t.belongs_to :workout, foreign_key: true
      t.belongs_to :exercise, foreign_key: true

      t.timestamps
    end
  end
end
