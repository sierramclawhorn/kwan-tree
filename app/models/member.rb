class Member < ApplicationRecord
	belongs_to :branch

	validates_uniqueness_of :number
	validates_presence_of :number
	validates_format_of :birthdate, :with =>  /\A[0-9]{4}\Z/
	validates_format_of :deathdate, :with =>  /\A[0-9]{4}\Z/
end
