require 'open-uri'

$ALBUM_ART_FILES = File.readlines(File.dirname(__FILE__) + '/album_art.txt').map { |line| line.chomp }

def generate_name
  random_words = [
    Faker::Team.creature.downcase,
    Faker::Hacker.noun.downcase,
    Faker::Hipster.word.downcase,
    Faker::Space.moon.downcase,
    Faker::Name.first_name.downcase,
    Faker::Beer.malts.downcase
  ].shuffle
  song_name = []

  rand(1..3).times { song_name << random_words.pop }

  song_name.join(" ")
end

def generate_songs(amount)
  songs = File.readlines(File.dirname(__FILE__) + '/songs.txt').map { |line| line.chomp }
  songs.shuffle
  track_list = {}
  random_songs = []

  while random_songs.length < amount
    random_songs.push(songs.pop)
  end

  while track_list.keys.length < amount
    track_list[(amount - track_list.keys.length).to_s] = {
      title: generate_name,
      track_num: (amount - track_list.keys.length),
      file: open(random_songs.pop)
    }
  end

  track_list
end

def generate_album_text
  text = "Written by #{Faker::Name.name}\n"
  text += "#{Faker::Music.instrument}: #{Faker::Name.name}\n"
  text += "#{Faker::Music.instrument}: #{Faker::Name.name}\n"
  text += "#{Faker::Music.instrument}: #{Faker::Name.name}"
  text
end

def create_album(user)
  user.albums.create(
    title: generate_name.split(" ").map{ |word| word.capitalize }.join(" "),
    description: generate_album_text,
    album_art: open($ALBUM_ART_FILES.shift),
    date: Faker::Date.between(3.years.ago, Date.today),
    songs_attributes: generate_songs(rand(5..7))
  )
end

red = User.create(
  username: "Best Guest",
  password: "password",
  band_name: "The Recruiters",
  bio: "Professional organizer. Friendly creator. Coffee aficionado. Gamer. General web fanatic. Total twitter buff.",
  primary_color: "#964f4f",
  secondary_color: "#622323",
  text_color: "#b9aa82",
  band_header: open("https://www.dropbox.com/s/1ejn494xs8cww3u/banner.jpg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/z73zz2st6y8cd9v/artist.jpeg?dl=1")
)

3.times { create_album(red) }

user_count = 2

orange = User.create(
  username: "user#{user_count}",
  password: "password",
  band_name: "Marketing",
  bio: "Music fanatic. Prone to fits of apathy. Web fanatic. Food junkie. Travel nerd. Explorer.",
  primary_color: "#9c5706",
  secondary_color: "#624723",
  text_color: "#b99682",
  band_header: open("https://www.dropbox.com/s/zab6n9s0og62mcc/banner.jpeg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/rhu6wbns21uasp4/artist.jpg?dl=1")
)

3.times { create_album(orange) }

user_count += 1

yellow = User.create(
  username: "user#{user_count}",
  password: "password",
  band_name: "Object Drain",
  bio: "Extreme social media enthusiast. Beer practitioner. Organizer. Internet junkie. Proud zombie buff.",
  primary_color: "#9c8a3c",
  secondary_color: "#6a621e",
  text_color: "#c4c286",
  band_header: open("https://www.dropbox.com/s/cu9ih2q2i6trc27/banner.jpg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/9us9vigsubaefyi/artist.jpeg?dl=1")
)

3.times { create_album(yellow) }

user_count += 1

green = User.create(
  username: "user#{user_count}",
  password: "password",
  band_name: "The Pragmatics",
  bio: "Infuriatingly humble troublemaker. Food maven. Social media ninja. Lifelong travel geek. General zombie junkie.",
  primary_color: "#4e664b",
  secondary_color: "#153313",
  text_color: "#9bbea0",
  band_header: open("https://www.dropbox.com/s/hixot3i3p5khgah/banner.jpeg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/egvimqnknbd1lkn/artist.jpeg?dl=1")
)

3.times { create_album(green) }

user_count += 1

blue = User.create(
  username: "user#{user_count}",
  password: "password",
  band_name: "Paparu",
  bio: "Coffee aficionado. Devoted travel expert. Passionate social media lover. Reader. Amateur gamer. Extreme communicator.",
  primary_color: "#444488",
  secondary_color: "#131e33",
  text_color: "#a8b0e6",
  band_header: open("https://www.dropbox.com/s/j6kje73kf180irc/banner.jpg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/iviqjublfsdcjwg/artist.jpeg?dl=1")
)

3.times { create_album(blue) }

user_count += 1

purple = User.create(
  username: "user#{user_count}",
  password: "password",
  band_name: "Couple Pixel",
  bio: "Infuriatingly humble problem solver. Subtly charming web advocate. Award-winning pop culture enthusiast. Introvert. Hardcore music lover.",
  primary_color: "#675098",
  secondary_color: "#221333",
  text_color: "#bba8e6",
  band_header: open("https://www.dropbox.com/s/7md5ulivdq2s6hx/banner.jpg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/hdcwk9cts0bhmsz/artist.jpg?dl=1")
)

3.times { create_album(purple) }

user_count += 1

pink = User.create(
  username: "user#{user_count}",
  password: "password",
  band_name: "The Planet",
  bio: "Avid troublemaker. Typical music buff. Reader. Zombie expert. Lifelong social media advocate.",
  primary_color: "#853a7d",
  secondary_color: "#33132c",
  text_color: "#e6a8c5",
  band_header: open("https://www.dropbox.com/s/0crvkmab1i5igbt/banner.jpeg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/4ary1iaexjdv18u/artist.jpeg?dl=1")
)

3.times { create_album(pink) }

user_count += 1

brown = User.create(
  username: "user#{user_count}",
  password: "password",
  band_name: "Fang",
  bio: "Tv fanatic. Evil bacon ninja. Avid music junkie. Zombie advocate. Infuriatingly humble music buff.",
  primary_color: "#524632",
  secondary_color: "#373035",
  text_color: "#776f72",
  band_header: open("https://www.dropbox.com/s/9yqo2jj46bmwtdk/banner.jpeg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/ug0kr4h2q3tizcs/artist.jpg?dl=1")
)

3.times { create_album(brown) }

user_count += 1

black = User.create(
  username: "user#{user_count}",
  password: "password",
  band_name: "NOTA",
  bio: "Organizer. Subtly charming travel expert. Communicator. Food geek. Thinker.",
  primary_color: "#000000",
  secondary_color: "#ffffff",
  text_color: "#000000",
  band_header: open("https://www.dropbox.com/s/bb5g38qj4k0rpuv/banner.jpeg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/5sjet6qg710k86d/artist.jpeg?dl=1")
)

3.times { create_album(black) }

user_count += 1

grey = User.create(
  username: "user#{user_count}",
  password: "password",
  band_name: "Winter And The Crude",
  bio: "General explorer. Internet nerd. Hipster-friendly bacon expert. Social media guru. Travel junkie.",
  primary_color: "#8f8f8f",
  secondary_color: "#403f3f",
  text_color: "#c8c8c8",
  band_header: open("https://www.dropbox.com/s/gnecifk4rokmhu6/banner.jpeg?dl=1"),
  artist_pic: open("https://www.dropbox.com/s/ookxrnd5nk4r50l/artist.jpg?dl=1")
)

3.times { create_album(grey) }

user_count += 1
