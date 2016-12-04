# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
band_name       | string    | indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
bio             | text      |
artist_pic      | string    |
(bonus)is_artist| boolean   | not null

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed
album_art   | string    | nut null (wherever the art is uploaded to?)
description | text      | not null
date        | date      | not null
artist_id   | integer   | not null, foreign key (references users), indexed

## songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed
track_num   | integer   | not null
album_id    | integer   | not null, foreign key (references albums), indexed
song_url    | string    | not null (wherever the song is uploaded to?)

--Bonus--

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
album_id    | integer   | not null, foreign key (references albums), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
