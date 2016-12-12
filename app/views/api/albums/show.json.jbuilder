json.id @album.id
json.title @album.title
json.description @album.description
json.artist_id @album.artist_id
json.album_art asset_path(@album.album_art)
json.date @album.date
json.songs @album.songs.each do |song|
  json.id song.id
  json.title song.title
  json.track_num song.track_num
  json.file asset_path(song.file)
end
