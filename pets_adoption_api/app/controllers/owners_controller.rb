class OwnersController < ApplicationController

    def index
        @owners = Owner.all
        render json: @owners
    end

    def show
        @owner = Owner.find(params[:id])
        render json: @owner
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
              params.require(:owner).permit(:name, :age, :location, :email, :phone_number, :description)
         end
        



    def destroy
        @owner = Owner.find(params[:id])
        @owner.destroy
        head :no_content
        
    end

    def update
        @owner = Owner.find(params[:id])
        if @owner.update(owner_params)
            render json: @owner, status: :ok
          else
            render json: { errors: @owner.errors }, status: :unprocessable_entity
        end
    end

    private


    def owner_params
      params.require(:owner).permit(:name, :age, :location, :email, :phone_number, :description)
    end
end