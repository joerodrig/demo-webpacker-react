Rails.application.routes.draw do
  resources :demo_pages
  root to: "demo_pages#index"
end
