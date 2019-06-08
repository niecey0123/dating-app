class PetsController < ApplicationController

    before_action :get_pets, only: [:show, :update, :destroy]

    def index
        @pets = Pet.all
        render json: @pets

    end

    def show
        @pet = Pet.find(params[:id])
          render json: @pet
    end

    def update
    @pet = Pet.find(params[:id])
    
    if @pet.update(pet_params)
      render json: @pet, status: :ok
    else
      render json: { errors: @pet.errors }, status: :unprocessable_entity
    end
  
    end

    
  def destroy
    @pet = Pet.find(params[:id])
    @pet.destroy
    head :no_content
  end

    private
    def get_pets
        @pet = Pet.find(params[:id])
    end

    def pet_params
      params.require(:pet).permit(:name, :age, :breed, :location, :photo, :description)
    end

end