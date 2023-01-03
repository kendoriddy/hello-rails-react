Rails.application.routes.draw do
  get 'api/index'
  get 'greetings/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index]
    end
  end

end
