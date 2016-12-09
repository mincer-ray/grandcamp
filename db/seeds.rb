# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.new(
username: "Best Guest",
password: "password",
bio: "Best sample bio ever and I have to make sure that its a little long so it wraps")

guest.save!
guest = User.first
album = guest.albums.new(
title: "albut 1",
description: "not a password")

album.save!

album = guest.albums.new(
title: "albut 4fdd",
description: "description")

album.save!

album = guest.albums.new(
title: "Robot dump",
description: "afgg")

album.save!

guest = User.new(
username: "Other Artist",
password: "password",
bio: "Best sample bio ever and I have to make sure that its a little long so it wraps")

guest.save!

guest = User.new(
username: "Rad Dude",
password: "password",
bio: "Best sample bio ever and I have to make sure that its a little long so it wraps")

guest.save!
