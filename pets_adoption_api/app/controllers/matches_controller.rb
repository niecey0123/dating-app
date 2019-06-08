class MatchesController < ApplicationController

  def index
    @owner = Owner.find(params[:owner_id]).as_json(:include => :matches)
      
    if @owner
      render json: @owner, include: :pets, status: :ok
    else
      render json: {
        message: "No Matches Found"
      },
      status: :not_found
    end
  end
  
  def show
    @owner = Owner.find(params[:owner_id]).as_json(:include => :matches)
      
      if @owner
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