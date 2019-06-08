class MatchesController < ApplicationController
  
  def show
    @owners = Owner.find(params[:owner_id])
    @pets = @owners.pets.as_json(:include => :matches)
      
      @owner = @owners.select { |owner|
        owner.id.to_i == params[:id].to_i
      }
      
      if !@owner.empty?
        render json: @owner, include: :pets, status: :ok
      else
        render json: {
          message: "No Matches Found"
        },
        status: :not_found
      end
    end

  
  def create
    @pet = Pet.find(params[:pet_id])
    @owner = Owner.find(params[:owner_id])
    @owner.pets.push(@pet)
    render json: @owner, include: :pets, status: :created
  end     

  def destroy
    @match = Match.find(params[:id])
    # f
    if @match
      @match.destroy
      head :no_content
    else
      head :internal_server_error
    end
  end


  
end