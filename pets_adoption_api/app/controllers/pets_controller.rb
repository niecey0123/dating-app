class PetsController < ApplicationController


  def index
      @pets = Pet.all
      render json: @pets

  end

  def create
    @pet = Pet.new(pet_params)
    if @pet.save
      render json: @pet, status: :created
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end  
 

  def show
      @pet = Pet.find(params[:id])
        render json: @pet
  end

# def destroy
#   @pet = Pet.find(params[:id])
#   @pet.destroy
#   head :no_content
# end

# def update
#     @pet = Pet.find(params[:id])
    
#     if @pet.update(pet_params)
#       render json: @pet, status: :ok
#     else
#       render json: { errors: @pet.errors }, status: :unprocessable_entity
#       end

#     end

#   private

#   def pet_params
#     params.require(:pet).permit(:name, :age, :breed, :location, :photo, :description)
#   end

# end
end