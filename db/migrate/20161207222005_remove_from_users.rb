class RemoveFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :artist_pic, :string
    remove_column :users, :band_header, :string
  end
end
