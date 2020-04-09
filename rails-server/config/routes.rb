Rails.application.routes.draw do
  # resources :woofs
  resources :woofs, except: [:new, :edit]

  # get 'woofs' => 'woofs#index'
  # get 'woofs/:id' => 'woofs#show'
  # post 'woofs' => 'woofs#create'
  # patch 'woofs/:id' => 'woofs#update'
  # delete 'woofs/:id' => 'woofs#destroy'
end
