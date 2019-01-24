class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :name
      # t.date :date 
      # t.string :image 

      t.timestamps
    end
  end
end
