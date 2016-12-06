class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      log_in!(@user)
      render 'api/users/show'
    else
      render json: { errors: ['invalid credentials'] }
    end
  end

  def destroy
    if logged_in?
      log_out!
      render json: ['success']
    else
      render json: { errors: ['not logged in'], status: 404 }
    end
  end
end
