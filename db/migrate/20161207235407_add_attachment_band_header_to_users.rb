class AddAttachmentBandHeaderToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :band_header
    end
  end

  def self.down
    remove_attachment :users, :band_header
  end
end
