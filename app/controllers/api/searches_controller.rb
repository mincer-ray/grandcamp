class Api::SearchesController < ApplicationController
  def index
    query = search_params[:query].downcase
    users = User.where("LOWER(band_name) ~ ?", query)
    albums = Album.where("LOWER(title) ~ ?", query)
    songs = Song.where("LOWER(title) ~ ?", query).includes(:album)
    @results = {}
    counter = 1;

    users.each do |user|
      @results[counter] = {}
      @results[counter][:type] = "artist"
      @results[counter][:id] = user.id
      @results[counter][:name] = user.band_name
      @results[counter][:pic] = user.artist_pic
      counter += 1
    end

    albums.each do |album|
      @results[counter] = {}
      @results[counter][:type] = "album"
      @results[counter][:id] = album.id
      @results[counter][:name] = album.title
      @results[counter][:pic] = album.album_art
      counter += 1
    end

    songs.each do |song|
      @results[counter] = {}
      @results[counter][:type] = "song"
      @results[counter][:id] = song.album.id
      @results[counter][:name] = song.title
      @results[counter][:pic] = song.album.album_art
      counter += 1
    end

    if @results.keys.length > 0
      render "api/searches/index"
    else
      render json: ["nothing found"], status: 200
    end
  end

  def show
    @random_albums = Album.order("RANDOM()").includes("artist").limit(params[:id].to_i)

    render "api/searches/random"
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end
