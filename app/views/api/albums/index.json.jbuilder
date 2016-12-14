@albums.each do |album|
  json.set! album.id do
    json.id album.id
    json.title album.title
    json.album_art asset_path(album.album_art.url(:full))
  end
end
