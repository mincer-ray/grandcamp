class AddArtistInfoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :band_name, :string, null: false, default: 'Your Band Name'
    add_column :users, :bio, :text
    add_column :users, :artist_pic, :string
    add_column :users, :band_header, :string
    add_index :users, :band_name
  end
end
