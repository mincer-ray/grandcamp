# == Schema Information
#
# Table name: albums
#
#  id                     :integer          not null, primary key
#  title                  :string           not null
#  description            :text             not null
#  date                   :date             default(Thu, 08 Dec 2016), not null
#  artist_id              :integer          not null
#  album_art_file_name    :string
#  album_art_content_type :string
#  album_art_file_size    :integer
#  album_art_updated_at   :datetime
#

class Album < ActiveRecord::Base
  validates :title, :description, :artist_id, presence: true
  has_attached_file :album_art, styles: {thumb: "50x50#", full: "232x232#"}, default_url: 'default.jpg'
  validates_attachment_content_type :album_art, content_type: /\Aimage\/.*\Z/

  after_initialize :set_default_date

  def set_default_date
    self.date ||= Date.today
  end

  belongs_to :artist, inverse_of: :albums,
    class_name: "User",
    foreign_key: :artist_id,
    primary_key: :id

  has_many :songs, inverse_of: :album, dependent: :destroy,
    class_name: "Song",
    foreign_key: :album_id,
    primary_key: :id

  accepts_nested_attributes_for :songs, allow_destroy: true
end
