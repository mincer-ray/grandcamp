class AddPrimaryColorToUser < ActiveRecord::Migration
  def change
    add_column :users, :primary_color, :string
  end
end
