# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161214164226) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string   "title",                                         null: false
    t.text     "description",                                   null: false
    t.date     "date",                   default: '2016-12-08', null: false
    t.integer  "artist_id",                                     null: false
    t.string   "album_art_file_name"
    t.string   "album_art_content_type"
    t.integer  "album_art_file_size"
    t.datetime "album_art_updated_at"
  end

  add_index "albums", ["artist_id"], name: "index_albums_on_artist_id", using: :btree
  add_index "albums", ["title"], name: "index_albums_on_title", using: :btree

  create_table "songs", force: :cascade do |t|
    t.string   "title",             null: false
    t.integer  "track_num",         null: false
    t.integer  "album_id",          null: false
    t.string   "file_file_name"
    t.string   "file_content_type"
    t.integer  "file_file_size"
    t.datetime "file_updated_at"
  end

  add_index "songs", ["album_id"], name: "index_songs_on_album_id", using: :btree
  add_index "songs", ["title"], name: "index_songs_on_title", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                                            null: false
    t.string   "password_digest",                                     null: false
    t.string   "session_token",                                       null: false
    t.datetime "created_at",                                          null: false
    t.datetime "updated_at",                                          null: false
    t.string   "band_name",                default: "Your Band Name", null: false
    t.text     "bio"
    t.string   "artist_pic_file_name"
    t.string   "artist_pic_content_type"
    t.integer  "artist_pic_file_size"
    t.datetime "artist_pic_updated_at"
    t.string   "band_header_file_name"
    t.string   "band_header_content_type"
    t.integer  "band_header_file_size"
    t.datetime "band_header_updated_at"
    t.string   "primary_color"
    t.string   "secondary_color"
    t.string   "text_color"
  end

  add_index "users", ["band_name"], name: "index_users_on_band_name", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
