Rails.application.routes.draw do
    resources :members
    resources  :branches

    root to: "pages#index"
end
