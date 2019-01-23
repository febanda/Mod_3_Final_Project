class WorkoutsController < ApplicationController

    before_action :define_current_workout
    
    def create
        workout = Workout.create(workout_params)
        render json: workout
    end
    
    def index
        
        render json: Workout.all, methods: [ :exercises ]
    end
    
    def show
        render json: current_workout, methods: [ :exercises ]
    end
    
    def update
        current_workout.update(workout_params)
        render json: current_workout
    end
    
    def destroy
        current_workout.destroy
        render json: current_workout
    end
    
    def workout_params
        params.permit(:name)
    end
    
    def define_current_workout
        if params[:id]
            @current_workout = Workout.find(params[:id])
        else
            @current_workout = Workout.new
        end
    end
    
    def current_workout
        @current_workout
    end
 
 end