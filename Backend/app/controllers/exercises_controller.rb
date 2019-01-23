class ExercisesController < ApplicationController

    before_action :define_current_exercise 
    
    def create
        exercise = Exercise.create(exercise_params)
        render json: exercise
    end
    
    def index
        render json: Exercise.all   
    end
    
    def show
        render json: current_exercise
    end
    
    def update
        current_exercise.update(exercise_params)
        render json: current_exercise
    end
    
    def destroy
        current_exercise.destroy
        render json: current_exercise
    end
    
    def exercise_params
        params.permit(:name, :category, :main_muscle_worked, :equipment, :level, :video)
    end
    
    def define_current_exercise
        if params[:id]
            @current_exercise = Exercise.find(params[:id])
        else
            @current_exercise = Exercise.new
        end
    end
    
    def current_exercise
        @current_exercise
    end
 
 end