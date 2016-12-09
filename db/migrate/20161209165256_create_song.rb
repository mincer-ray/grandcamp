class CreateSong < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :track_num, null: false
      t.integer :album_id, null: false
    end

    add_index :songs, :title
    add_index :songs, :album_id
  end
end
