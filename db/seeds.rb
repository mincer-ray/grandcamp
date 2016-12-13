# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create(
username: "Best Guest",
password: "password",
bio: "Best sample bio ever and I have to make sure that its a little long so it wraps")

# https://freemusicarchive.org/music/download/870f8cda317426bb3e21880de5a69efb7917056a

# guest = User.first
# album = guest.albums.new(
# title: "Only song album",
# description: "def got a song")
#
# album.save!
#
# album = guest.albums.new(
# title: "other album",
# description: "description")
#
# album.save!
#
# album = guest.albums.new(
# title: "Robot dump",
# description: "description")
#
# album.save!
#
# guest = User.new(
# username: "Other Artist",
# password: "password",
# bio: "Best sample bio ever and I have to make sure that its a little long so it wraps")
#
# guest.save!
#
# guest = User.new(
# username: "Rad Dude",
# password: "password",
# bio: "Best sample bio ever and I have to make sure that its a little long so it wraps")
#
# guest.save!
