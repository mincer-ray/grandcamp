class AddAttachmentAlbumArtToAlbums < ActiveRecord::Migration
  def self.up
    change_table :albums do |t|
      t.attachment :album_art
    end
  end

  def self.down
    remove_attachment :albums, :album_art
  end
end
