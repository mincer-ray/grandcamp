[logo]: https://raw.githubusercontent.com/mincer-ray/grandcamp/master/app/assets/images/gclogo.png "Grandcamp"
[albumSS]: https://raw.githubusercontent.com/mincer-ray/grandcamp/master/app/assets/images/ssalbum.png "Album"
[artistSS]: https://raw.githubusercontent.com/mincer-ray/grandcamp/master/app/assets/images/ssartist.png "Artist"
[playerSS]: https://raw.githubusercontent.com/mincer-ray/grandcamp/master/app/assets/images/ssplayer.png "Song Player"
[searchSS]: https://raw.githubusercontent.com/mincer-ray/grandcamp/master/app/assets/images/sssearch.png "Search"
[heroku]: https://grandcamp.herokuapp.com/

![alt text][logo]

[Grandcamp Live][heroku]

Grandcamp is a full-stack web application based on the popular indie music website
Bandcamp.com. It makes use of Ruby on Rails for the backend, a PostgreSQL database,
and React/Redux for the frontend.

## Grandcamp Features

### Artist and Album pages

![alt text][artistSS]

Users on Grandcamp are musicians, so every user has a personal artist page. The
users artist information is stored in the users table which contains columns for
the `band_name` and artist `bio`. Artist pages also allow for customization of
the `band_header` image, `artist_pic`, and colors. Every artist can set a `primary_color`
for the background and album header, a `secondary_color` for the center background,
and a `text_color`.

Users on Grandcamp have a collection of albums that they have uploaded. User albums
are stored in the albums table which joins to the users table on `artist_id`. Albums
have a `title`, `description`, and a release `date`. Artists can also upload `album_art`
to display with the album.

![alt text][albumSS]

Every album has a collection of songs which are stored in the songs table. Songs
are joined to the albums table on `album_id`. Songs have a `title`, `track_num`,
and audio `file`. The songs `duration` is pulled from the audio metadata using the
`mp3info` gem when the file is first uploaded.

Artist pages are rendered in the `ArtistPage` component. When an artist page is
visited, the artists data is stored in the `artist` slice of the state, and the
artist's albums are collected and stored in `albums`. When the albums are gathered
for the artist page, only the title and album art is sent from the backend.

Album pages are rendered in the `AlbumPage` component. When the album page is
visited, additional album data is requested and stored in that specific album's
object in the albums state. The song data is sent up at this point so that it can
be accessed by the player.

### Song Player

![alt text][playerSS]

Grandcamp Album pages have a song player for visiting fans to hear artist's songs.
The song player uses the Web Audio API to play music from files that are hosted
on Amazon Web Services. The `AudioPlayer` component is rendered when an album page
is loaded. The `AudioPlayer` creates an `audio` context and stores a reference in
local state. The reference allows for loading of different song files depending
on tracks that the visitor clicks on in the `SongList` component. The song player
stores an object of the albums songs with key values of the `track_num`. When the
song player hits the end of a track it will automatically play the next track in
the object.

###
