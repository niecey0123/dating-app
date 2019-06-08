class MatchesController < ApplicationController

    def index
        @owners = Owner.find(params[:owner_id])
        @pets = @owners.pets.as_json(:include => :matches)
        render json: @pets, include: :owners, status: :ok
        # @matches = Match.all
    end

    def show
        @owner = Owner.find(params[:id])
        @owners = @pet.owners
        
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
            @owner = Owner.find(params[:owner_id])
            @pet = Pet.new(match_params)
            
            if @owner.save
              @owner.pets.push(@pet)
              render json: @pet, status: :created
            else
              render json: { errors: @pet.errors }, status: :unprocessable_entity
            end
          end          
      


      private

      def match_params
        params.permit(:name,:breed,:description, :owner_id)
      end
    
end