class Member < ApplicationRecord
	validates_uniqueness_of :number
	validates_presence_of :number
end
