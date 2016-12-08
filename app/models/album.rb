class Album < ActiveRecord::Base
  validates :title, :description, :artist_id, presence: true
  has_attached_file :album_art, default_url: 'default.jpg'
  validates_attachment_content_type :album_art, content_type: /\Aimage\/.*\Z/

  belongs_to :artist,
    class_name: "User",
    foreign_key: :artist_id,
    primary_key: :id
end
