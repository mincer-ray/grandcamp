```js
{
  currentUser: {
    id: 1,
    username: "cool-user"
  },
  queryParams: {
    "search string"
  },
  artist: {
    band_name: "Rock Jam Dudes",
    artist_id: 3,
    artist_pic: "url",
    band_header: "url",
    bio: "the grimey goofs from CT state",
  },
  albums: {
    1: {
      album_art: "url",
      title: "Great Album",
    },
    2: {
      album_art: "url",
      title: "This Big Album",
    }
    3: {
      album_art: "url",
      title: "This Big Album",
      description: "wow a 56 track album! this is crazy.",
      date: "10/14/1988",
      songs: {
        1: {
          title: "Long Song Yea",
          track_num: 1,
          song_url: "song.com/songsong"
        },
        2: {
          title: "Silly Song",
          track_num: 2,
          song_url: "song.com/bigolsong"
        },
        3: {
          title: "Goof Hurray",
          track_num: 3;
          song_url: "song.com/goofgoof"
        }
      },
      (bonus)tags: {
        1: {
          id: 1,
          name: "Rock"
        },
        2: {
          id: 2,
          name: "Pop"
        }
      }
    }
  },
  currentAlbum: {
    id: 3
  }
}
```
