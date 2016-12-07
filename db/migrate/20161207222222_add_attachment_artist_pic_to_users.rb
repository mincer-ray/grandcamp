class AddAttachmentArtistPicToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :artist_pic
    end
  end

  def self.down
    remove_attachment :users, :artist_pic
  end
end
