class AddAttachmentFileToSongs < ActiveRecord::Migration
  def self.up
    change_table :songs do |t|
      t.attachment :file
    end
  end

  def self.down
    remove_attachment :songs, :file
  end
end
