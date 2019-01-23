class StatsController < ApplicationController

    before_action :define_current_stat
    
    def create
        stat = Stat.create(stat_params)
        render json: stat
    end
    
    def index
        render json: Stat.all   
    end
    
    def show
        render json: current_stat
    end
    
    def update
        current_stat.update(stat_params)
        render json: current_stat
    end
    
    def destroy
        current_stat.destroy
        render json: current_stat
    end
    
    def stat_params
        params.permit(:sets, :min_weight, :max_weight, :reps)
    end
    
    def define_current_stat
        if params[:id]
            @current_stat = Stat.find(params[:id])
        else
            @current_stat = Stat.new
        end
    end
    
    def current_stat
        @current_stat
    end
 
 end