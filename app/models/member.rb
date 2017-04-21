class Member < ApplicationRecord
	validates_presence_of :number
	validates_presence_of :name

	def self.search(search)
 		if search
 		  where('name LIKE ?', "%#{search}%")
 		else
 		  all
 		end
	end

	before_validation do |model|
  	model.number.reject!(&:blank?) if model.number
	end

end
