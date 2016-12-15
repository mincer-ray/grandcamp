# == Schema Information
#
# Table name: songs
#
#  id                :integer          not null, primary key
#  title             :string           not null
#  track_num         :integer          not null
#  album_id          :integer          not null
#  file_file_name    :string
#  file_content_type :string
#  file_file_size    :integer
#  file_updated_at   :datetime
#

class Song < ActiveRecord::Base
  validates :title, :track_num, :album, presence: true
  has_attached_file :file
  validates_attachment_content_type :file, content_type:
  [
    'audio/mpeg',
    'audio/x-mpeg',
    'audio/mp3',
    'audio/x-mp3',
    'audio/mpeg3',
    'audio/x-mpeg3',
    'audio/m4a',
    'audio/mpeg4',
    'audio/x-mpeg4',
    'audio/mpg',
    'audio/x-mpg',
    'audio/x-mpegaudio'
  ]

  belongs_to :album, inverse_of: :songs,
    class_name: 'Album',
    foreign_key: :album_id,
    primary_key: :id
end
