class AddMoreColorsToUser < ActiveRecord::Migration
  def change
    add_column :users, :secondary_color, :string
    add_column :users, :text_color, :string
  end
end
