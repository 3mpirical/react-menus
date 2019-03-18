Rails.application.routes.draw do

  namespace :api do
    resources :menus do
      resources :foods
    end
  end
  
end
