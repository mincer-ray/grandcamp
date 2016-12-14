require 'open-uri'

guest = User.create(
  username: "Best Guest",
  password: "password",
  bio: "Best sample bio ever and I have to make sure that its a little long so it wraps"
)

guest.albums.create(
  title: "KMRT",
  description: "testing seed data",
  album_art: open("https://www.dropbox.com/s/zyucpq33ep35c4v/Curator%20-%20K%20m%20r%20t%20-%20cover.png?dl=1"),
  date: '2016-12-08',
  songs_attributes: {
    "1" => {title: "The Best 2 U",
    track_num: 1,
    file: open("https://www.dropbox.com/s/pynxgl39si4sb0t/Curator%20-%20K%20m%20r%20t%20-%2001%20The%20Best%202%20U.mp3?dl=1")},
    "2" => {title: "JULY // GENERIC",
    track_num: 2,
    file: open("https://www.dropbox.com/s/g7pn99rgh9xuu9k/Curator%20-%20K%20m%20r%20t%20-%2002%20JULY%20-%20GENERIC.mp3?dl=1")},
    "3" => {title: "Death of a Mart",
    track_num: 3,
    file: open("https://www.dropbox.com/s/fgj5w18uypobw3l/Curator%20-%20K%20m%20r%20t%20-%2003%20Death%20of%20a%20Mart.mp3?dl=1")},
    "4" => {title: "Kresge",
    track_num: 4,
    file: open("https://www.dropbox.com/s/w3fkarc7piqyr54/Curator%20-%20K%20m%20r%20t%20-%2004%20Kresge.mp3?dl=1")}
  }
)
