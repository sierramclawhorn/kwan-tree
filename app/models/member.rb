class Member < ApplicationRecord
	belongs_to :branch

	# validates_uniqueness_of :number
	validates_presence_of :number
	validates_presence_of :name
	# validates_format_of :birthdate, :with =>  /\A[0-9]{4}\Z/
	# validates_format_of :deathdate, :with =>  /\A[0-9]{4}\Z/

	def self.search(term)
 		if term
 		  where('name LIKE ?', "%#{term}%").order('number ASC')
 		else
 		  all
 		end
	end
end
