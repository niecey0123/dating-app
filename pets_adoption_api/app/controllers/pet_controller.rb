class PetsController < ApplicationController

    def index
        @pets = Pet.all
        render json: @pets, status: :ok
        
    end

end