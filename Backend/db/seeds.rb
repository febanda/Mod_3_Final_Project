# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Workout.destroy_all
Stat.destroy_all 
Exercise.destroy_all

workout1 = Workout.create(name: 'Leg Day')
workout2 = Workout.create(name: 'Chest Day')
workout3 = Workout.create(name: 'Back Day')


exercise1 = Exercise.create(name: 'barbell bench press', category: 'strength', main_muscle_worked: 'chest', equipment: 'barbell', level: 'beginner', video: 'https://www.bodybuilding.com/exercises/barbell-bench-press-medium-grip',workout_id: workout2.id)
exercise2 = Exercise.create(name: 'incline dumbbell press', category: 'strength', main_muscle_worked: 'chest', equipment: 'dumbbell', level: 'beginner', video: 'https://www.bodybuilding.com/exercises/incline-dumbbell-press',workout_id: workout2.id)
exercise3 = Exercise.create(name: 'pushups', category: 'strength', main_muscle_worked: 'chest', equipment: 'body only', level: 'beginner', video: 'https://www.bodybuilding.com/exercises/pushups',workout_id: workout2.id)

exercise4 = Exercise.create(name: 'single-leg press', category: 'strength', main_muscle_worked: 'quadriceps', equipment: 'machine', level: 'intermediate', video: 'https://www.bodybuilding.com/exercises/single-leg-press',workout_id: workout1.id)
exercise5 = Exercise.create(name: 'weighted jump squat', category: 'strength', main_muscle_worked: 'quadriceps', equipment: 'barbell', level: 'intermediate', video: 'https://www.bodybuilding.com/exercises/weighted-jump-squat-',workout_id: workout1.id)
exercise6 = Exercise.create(name:'kettlebell pistol squat', category: 'strength', main_muscle_worked: 'quadriceps', equipment: 'kettlebells', level: 'expert', video: 'https://www.bodybuilding.com/exercises/kettlebell-pistol-squat',workout_id: workout1.id)


exercise7 = Exercise.create(name:'one-arm dumbbell row', category: 'strength', main_muscle_worked: 'middle back', equipment: 'dumbbell', level: 'beginner', video: 'https://www.bodybuilding.com/exercises/one-arm-dumbbell-row',workout_id: workout3.id)
exercise8 = Exercise.create(name:'hyperextensions', category: 'strength', main_muscle_worked: 'lower back', equipment: 'machine', level: 'beginner', video: 'https://www.bodybuilding.com/exercises/hyperextensions-back-extensions',workout_id: workout3.id)
exercise9 = Exercise.create(name:'pullups', category: 'strength', main_muscle_worked: 'lats', equipment: 'body only', level: 'intermediate', video: 'https://www.bodybuilding.com/exercises/pullups',workout_id: workout3.id)


stats1 = Stat.create(workout_id: workout1.id, exercise_id: exercise4.id, sets: 3, min_weight: 80, max_weight: 180, reps: 36)
stats2 = Stat.create(workout_id: workout1.id, exercise_id: exercise5.id, sets: 4, min_weight: 40, max_weight: 100, reps: 30)
stats3 = Stat.create(workout_id: workout1.id, exercise_id: exercise6.id, sets: 5, min_weight: 15, max_weight: 25, reps: 40)

stats4 = Stat.create(workout_id: workout2.id, exercise_id: exercise1.id, sets: 3, min_weight: 185, max_weight: 315, reps: 40)
stats5 = Stat.create(workout_id: workout2.id, exercise_id: exercise2.id, sets: 4, min_weight: 50, max_weight: 110, reps: 40)
stats6 = Stat.create(workout_id: workout2.id, exercise_id: exercise3.id, sets: 1, min_weight: 0, max_weight: 0, reps: 100)

stats7 = Stat.create(workout_id: workout3.id, exercise_id: exercise7.id, sets: 3, min_weight: 70, max_weight: 120, reps: 36)
stats8 = Stat.create(workout_id: workout3.id, exercise_id: exercise8.id, sets: 3, min_weight: 25, max_weight: 45, reps: 40)
stats9 = Stat.create(workout_id: workout3.id, exercise_id: exercise9.id, sets: 1, min_weight: 0, max_weight: 0, reps: 100)










