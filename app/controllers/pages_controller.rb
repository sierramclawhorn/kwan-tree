class PagesController < ApplicationController
  def index
  	@members = Member.all.order('number ASC')
  end
end