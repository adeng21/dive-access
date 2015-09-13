class HomeController < ApplicationController

  def index
  end

  def new_user
    if params[:email]
      create_user = User.create!(email: params[:email],
                    user_type: "early-adopter",
                    password: 'password')
      if create_user
        render json: nil, status: :ok
      else
        render json: nil, status: 404
      end
    end
  end
end
