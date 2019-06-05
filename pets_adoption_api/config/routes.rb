Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
 resources :owners
 resources :matches
 resources :pets

 scope '/owners/:owner_id/pets' do
  resources :matches
end

end
