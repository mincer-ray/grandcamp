class CreateAlbum < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.date :date, null: false
      t.integer :artist_id, null: false
    end

    add_index :albums, :title
    add_index :albums, :artist_id
  end
end
