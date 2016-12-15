count = 1
@random_albums.each do |album|
  json.set! count do
    json.id album.id
    json.name album.title
    json.artist_name album.artist.band_name
    json.color album.artist.primary_color
    json.album_art asset_path(album.album_art.url(:full))
  end

  count += 1
end
