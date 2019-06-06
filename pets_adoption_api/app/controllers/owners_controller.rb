class OwnersController < ApplicationController

    def index
        @owners = Owner.all
        render json: @owners
    end

    def show
        @owner = Owner.find(params[:id])
        render @owner
    end

        def create
            @owner = Owner.new(owner_params)
        
            if @owner.save
              render json: @owner, status: :created
            else
              render json: @owner.errors, status: :unprocessable_entity
            end
          end  
        
        private
        
        def owner_params
              params.require(:owner).permit(:name, :email, :age, :location, :description,:phone_number)
         end


    def update
        @owner = Owner.find(params[:id])
        if @owner.update(pet_params)
            render json: @owner, status: :ok
          else
            render json: { errors: @owner.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @owner = Owner.find(params[:id])
        @owner.destroy
        head :no_content
        
    end

    private
    def get_owners
        @owner = Owner.find(params[:id])
    end

    def pet_params
      params.require(:owner).permit(:name, :age, :breed, :location, :photo, :email, :phone_number, :description)
    end
end