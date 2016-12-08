class ChangeDefaultAlbumDate < ActiveRecord::Migration
  def change
    change_column_default :albums, :date, Date.today
  end
end
