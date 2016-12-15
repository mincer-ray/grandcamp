class Api::SearchesController < ApplicationController
  def index
    users = User.where("band_name ~ ?", search_params[:query])
    albums = Album.where("title ~ ?", search_params[:query])
    songs = Song.where("title ~ ?", search_params[:query]).includes(:album)
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
      render json: ["nothing found"], status: 404
    end
  end

  def show
    num_albums = Album.distinct.count('id')
    num_random = params[:id].to_i
    num_random = num_albums if num_random > num_albums
    @random_albums = []
    
    while @random_albums.length < num_random
      random = Album.find(rand(1..num_albums))

      @random_albums.push(random) unless @random_albums.include?(random)
    end

    render "api/searches/random"
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end
