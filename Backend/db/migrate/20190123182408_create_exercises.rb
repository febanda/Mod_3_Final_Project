class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :category
      t.string :main_muscle_worked
      t.string :equipment
      t.string :level
      t.string :video

      t.timestamps
    end
  end
end
