class PetsController < ApplicationController

    def index
        @pets = Pet.all
        render json: @pets, status: :ok

    
    end

    def show
        @owners = Owner.find(params[:owner_id])
        @pets = @owners.pets
        render json: @pets, include: :owners, status: :ok
        
    end

end