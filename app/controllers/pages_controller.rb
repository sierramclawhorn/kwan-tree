class PagesController < ApplicationController
  def index
  	@members = Member.search(params[:term])
  end

  def member_params
  	params.require(:member).permit(:name, :number, :spouse, :location, :term)
	end

end