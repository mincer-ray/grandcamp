class Api::UsersController < ApplicationController
  before_action :ensure_logged_in, only: [:update]

  def create
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])

    if @user
      render 'api/artists/show'
    else
      render json: ['user not found'], status: 404
    end
  end

  def update
    @user = User.find(params[:id])

    # TODO: add before action
    if current_user == @user && @user.update(artist_params)
      render 'api/artists/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def artist_params
    params.require(:artist).permit(:band_name, :bio, :artist_pic, :band_header)
  end

  def ensure_logged_in; end
end
