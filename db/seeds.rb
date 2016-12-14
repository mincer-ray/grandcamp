require 'open-uri'

red = User.create(
  username: "Best Guest",
  password: "password",
  band_name: "#{Faker::Hipster.word} #{Faker::Music.instrument}",
  bio: "#{Faker::Hipster.paragraph}",
  primary_color: "#854141",
  secondary_color: "#622323",
  text_color: "#b9aa82",
  band_header: open("https://www.dropbox.com/s/1ejn494xs8cww3u/banner.jpg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/z73zz2st6y8cd9v/artist.jpeg?dl=1")
)

user_count = 2

orange = User.create(
  username: "user#{user_count}",
  password: "password",
  band_name: "#{Faker::Hipster.word} #{Faker::Music.instrument}",
  bio: "#{Faker::Hipster.paragraph}",
  primary_color: "#9c5706",
  band_header: open("https://www.dropbox.com/s/zab6n9s0og62mcc/banner.jpeg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/rhu6wbns21uasp4/artist.jpg?dl=1")
)

user_count += 1

yellow = User.create(
  username: "user#{user_count}",
  password: "password",
  band_name: "#{Faker::Hipster.word} #{Faker::Music.instrument}",
  bio: "#{Faker::Hipster.paragraph}",
  primary_color: "#8d9006",
  band_header: open("https://www.dropbox.com/s/cu9ih2q2i6trc27/banner.jpg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/9us9vigsubaefyi/artist.jpeg?dl=1")
)

user_count += 1

green = User.create(
  username: "user#{user_count}",
  password: "password",
  band_name: "#{Faker::Hipster.word} #{Faker::Music.instrument}",
  bio: "#{Faker::Hipster.paragraph}",
  primary_color: "#074e14",
  band_header: open("https://www.dropbox.com/s/hixot3i3p5khgah/banner.jpeg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/egvimqnknbd1lkn/artist.jpeg?dl=1")
)

user_count += 1
