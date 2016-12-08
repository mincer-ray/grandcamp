class Api::AlbumsController < ApplicationController
  def index
    @albums = User.find(params[:id]).albums

    render 'api/albums/index'
  end

  def show
    @album = Album.find(params[:id])

    if @album
      render 'api/albums/show'
    else
      render json: ['album not found'], status: 404
    end
  end

  def create
    @album = current_user.albums.new(album_params)

    if @album.save
      render 'api/albums/show'
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def update; end

  def destroy; end

  private

  def album_params
    params.require(:album).permit(:title, :description, :album_art)
  end
end
