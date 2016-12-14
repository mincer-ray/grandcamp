require 'open-uri'

red = User.create(
  username: "Best Guest",
  password: "password",
  band_name: "#{Faker::Beer.hop} #{Faker::App.name}",
  bio: "#{Faker::Hipster.paragraph}",
  primary_color: "#854141",
  secondary_color: "#622323",
  text_color: "#b9aa82",
  band_header: open("https://www.dropbox.com/s/1ejn494xs8cww3u/banner.jpg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/z73zz2st6y8cd9v/artist.jpeg?dl=1")
)

red.albums.create(
  title: "#{Faker::Space.moon} #{Faker::Name.first_name} #{Faker::Beer.malts}",
  description: "#{Faker::Lorem.paragraph}",
  album_art: open("https://www.dropbox.com/s/c6xuatxebdywd39/cover1.jpeg?dl=1"),
  date: '2016-12-08',
  songs_attributes: {
    "1" => {title: "#{Faker::Lorem.word} #{Faker::Team.creature}",
    track_num: 1,
    file: open("https://www.dropbox.com/s/pynxgl39si4sb0t/Curator%20-%20K%20m%20r%20t%20-%2001%20The%20Best%202%20U.mp3?dl=1")},
    "2" => {title: "#{Faker::Lorem.word} #{Faker::Team.creature}",
    track_num: 2,
    file: open("https://www.dropbox.com/s/g7pn99rgh9xuu9k/Curator%20-%20K%20m%20r%20t%20-%2002%20JULY%20-%20GENERIC.mp3?dl=1")},
    "3" => {title: "#{Faker::Lorem.word} #{Faker::Team.creature}",
    track_num: 3,
    file: open("https://www.dropbox.com/s/fgj5w18uypobw3l/Curator%20-%20K%20m%20r%20t%20-%2003%20Death%20of%20a%20Mart.mp3?dl=1")},
    "4" => {title: "#{Faker::Lorem.word} #{Faker::Team.creature}",
    track_num: 4,
    file: open("https://www.dropbox.com/s/w3fkarc7piqyr54/Curator%20-%20K%20m%20r%20t%20-%2004%20Kresge.mp3?dl=1")}
  }
)

red.albums.create(
  title: "#{Faker::Space.moon} #{Faker::Name.first_name} #{Faker::Beer.malts}",
  description: "#{Faker::Lorem.paragraph}",
  album_art: open("https://www.dropbox.com/s/ako64qv1ujdk9fq/cover2.jpeg?dl=1"),
  date: '2016-12-08'
)

red.albums.create(
  title: "#{Faker::Space.moon} #{Faker::Name.first_name} #{Faker::Beer.malts}",
  description: "#{Faker::Lorem.paragraph}",
  album_art: open("https://www.dropbox.com/s/w5g7h38d7mxsest/cover3.jpeg?dl=1"),
  date: '2016-12-08'
)

user_count = 2

orange = User.create(
  username: "user#{user_count}",
  password: "password",
  band_name: "#{Faker::Beer.hop} #{Faker::App.name}",
  bio: "#{Faker::Hipster.paragraph}",
  primary_color: "#9c5706",
  secondary_color: "#624723",
  text_color: "#b99682",
  band_header: open("https://www.dropbox.com/s/zab6n9s0og62mcc/banner.jpeg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/rhu6wbns21uasp4/artist.jpg?dl=1")
)

orange.albums.create(
  title: "#{Faker::Space.moon} #{Faker::Name.first_name} #{Faker::Beer.malts}",
  description: "#{Faker::Lorem.paragraph}",
  album_art: open("https://www.dropbox.com/s/1ard3rl3xcsut3j/cover1.jpeg?dl=1"),
  date: '2016-12-08'
)

orange.albums.create(
  title: "#{Faker::Space.moon} #{Faker::Name.first_name} #{Faker::Beer.malts}",
  description: "#{Faker::Lorem.paragraph}",
  album_art: open("https://www.dropbox.com/s/uc5rbmbkdhmoo84/cover2.jpeg?dl=1"),
  date: '2016-12-08'
)

orange.albums.create(
  title: "#{Faker::Space.moon} #{Faker::Name.first_name} #{Faker::Beer.malts}",
  description: "#{Faker::Lorem.paragraph}",
  album_art: open("https://www.dropbox.com/s/2geqxaa0mlh42cx/cover3.jpg?dl=1"),
  date: '2016-12-08'
)

user_count += 1

yellow = User.create(
  username: "user#{user_count}",
  password: "password",
  band_name: "#{Faker::Beer.hop} #{Faker::App.name}",
  bio: "#{Faker::Hipster.paragraph}",
  primary_color: "#9c8a3c",
  secondary_color: "#6a621e",
  text_color: "#c4c286",
  band_header: open("https://www.dropbox.com/s/cu9ih2q2i6trc27/banner.jpg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/9us9vigsubaefyi/artist.jpeg?dl=1")
)

yellow.albums.create(
  title: "#{Faker::Space.moon} #{Faker::Name.first_name} #{Faker::Beer.malts}",
  description: "#{Faker::Lorem.paragraph}",
  album_art: open("https://www.dropbox.com/s/fekx7qv5dz0kwdn/cover1.jpeg?dl=1"),
  date: '2016-12-08'
)

yellow.albums.create(
  title: "#{Faker::Space.moon} #{Faker::Name.first_name} #{Faker::Beer.malts}",
  description: "#{Faker::Lorem.paragraph}",
  album_art: open("https://www.dropbox.com/s/gbxk78zyztqxxft/cover2.jpeg?dl=1"),
  date: '2016-12-08'
)

yellow.albums.create(
  title: "#{Faker::Space.moon} #{Faker::Name.first_name} #{Faker::Beer.malts}",
  description: "#{Faker::Lorem.paragraph}",
  album_art: open("https://www.dropbox.com/s/mum8dp2csnzlg0w/cover3.jpeg?dl=1"),
  date: '2016-12-08'
)

user_count += 1

green = User.create(
  username: "user#{user_count}",
  password: "password",
  band_name: "#{Faker::Beer.hop} #{Faker::App.name}",
  bio: "#{Faker::Hipster.paragraph}",
  primary_color: "#3f553d",
  secondary_color: "#153313",
  text_color: "#9bbea0",
  band_header: open("https://www.dropbox.com/s/hixot3i3p5khgah/banner.jpeg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/egvimqnknbd1lkn/artist.jpeg?dl=1")
)

green.albums.create(
  title: "#{Faker::Space.moon} #{Faker::Name.first_name} #{Faker::Beer.malts}",
  description: "#{Faker::Lorem.paragraph}",
  album_art: open("https://www.dropbox.com/s/gy1z6wopr4oqjpe/cover1.jpg?dl=1"),
  date: '2016-12-08'
)

green.albums.create(
  title: "#{Faker::Space.moon} #{Faker::Name.first_name} #{Faker::Beer.malts}",
  description: "#{Faker::Lorem.paragraph}",
  album_art: open("https://www.dropbox.com/s/glcwfiidp93wwax/cover2.jpeg?dl=1"),
  date: '2016-12-08'
)

green.albums.create(
  title: "#{Faker::Space.moon} #{Faker::Name.first_name} #{Faker::Beer.malts}",
  description: "#{Faker::Lorem.paragraph}",
  album_art: open("https://www.dropbox.com/s/rxiivl3gokzlfmx/cover3.jpeg?dl=1"),
  date: '2016-12-08'
)

user_count += 1
