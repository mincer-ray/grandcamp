json.id @album.id
json.title @album.title
json.description @album.description
json.artist_id @album.artist_id
json.album_art asset_path(@album.album_art)
json.songs @album.songs
