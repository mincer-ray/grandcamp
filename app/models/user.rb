# == Schema Information
#
# Table name: users
#
#  id                       :integer          not null, primary key
#  username                 :string           not null
#  password_digest          :string           not null
#  session_token            :string           not null
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  band_name                :string           default("Your Band Name"), not null
#  bio                      :text
#  artist_pic_file_name     :string
#  artist_pic_content_type  :string
#  artist_pic_file_size     :integer
#  artist_pic_updated_at    :datetime
#  band_header_file_name    :string
#  band_header_content_type :string
#  band_header_file_size    :integer
#  band_header_updated_at   :datetime
#

# User model for artists on Grandcamp
class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :band_name, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :artist_pic, default_url: 'default.jpg'
  validates_attachment_content_type :artist_pic, content_type: /\Aimage\/.*\Z/

  has_attached_file :band_header, default_url: 'hrt.jpg'
  validates_attachment_content_type :band_header, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token
  # before_validation :ensure_session_token_unique

  has_many :albums,
    class_name: "Album",
    foreign_key: :artist_id,
    primary_key: :id

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save!
    session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_session_token_unique
    while User.find_by(session_token: self.session_token)
      self.session_token = User.generate_session_token
    end
  end

  def password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end
