class Api::SearchesController < ApplicationController
  def index
    @users = User.where("band_name ~ ?", search_params[:query])
    @albums = Album.where("title ~ ?", search_params[:query])
    @albums = Song.where("title ~ ?", search_params[:query]).includes(:album)
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end

  def sanitize_send
    ActiveRecord::Base::sanitize(search_params[:query])
  end
end
