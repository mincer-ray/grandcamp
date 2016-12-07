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
      render json: ['invalid credentials']
    end
  end

  def destroy
    if logged_in?
      log_out!
      render json: ['success']
    else
      render json: ['not logged in'], status: 404
    end
  end
end
