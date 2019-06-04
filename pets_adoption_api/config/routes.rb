Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # resources :pets
  # resources :owners
  
  # scope '/pets/:pet_id' do
  #   resources :owners
  # end

  scope '/owners/:owner_id' do
    resources :pets
end


end
