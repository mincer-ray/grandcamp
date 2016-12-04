Home Page State

```js
{
  currentUser: {
    id: 1,
    username: "cool-user"
  }
}
```

Artist Page State

```js
{
  currentUser: {
    id: 1,
    username: "cool-user"
  },
  artist {
    artist_id: 3
    bio: "the grimey goofs from CT state"
  },
  albums: {
    1: {
      title: "Great Album",
    },
    2: {
      title: "This Big Album",
    }
  }
}
```

Album Page State

```js
{
  currentUser: {
    id: 1,
    username: "cool-user"
  },
  albums: {
    1: {
      title: "Sample State",
    },
    2: {
      title: "Sample State",
    },
    3: {
      title: "Sample State",
    }
  },
  currentAlbum: {
    title: "This Big Album",
    description: "wow a 56 track album! this is crazy.",
    artist_id: 1,
    songs: {
      1: {
        title: "Long Song Yea",
        song_url: "song.com/songsong"
      },
      2: {
        title: "Silly Song",
        song_url: "song.com/bigolsong"
      },
      3: {
        title: "Goof Hurray",
        song_url: "song.com/goofgoof"
      }
    },
    (bonus)tags: {
      1: {
        id: 1,
        name: "Rock"
      },
      2: {
        id: 1,
        name: "Pop"
      }
    }
  }
}
```
