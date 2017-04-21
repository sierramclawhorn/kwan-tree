class MembersController < ApplicationController
  def index
    @members = Member.search(params[:search])
  end

  def show
    find_member
  end

  def new
    @member = Member.new
  end

  def edit
    find_member
  end

  def create
    @member = Member.new(member_params)
    if @member.save
      redirect_to members_path(@member)
    else 
      render 'new'
    end
  end

  def update
    find_member
    if @member.update(member_params)
      redirect_to member_path(@member)
    else
      render 'edit'
    end
  end

  def destroy
    find_member
    @member.destroy
  end 

  private
    def find_member
      @member = Member.find(params[:id])
    end

    def member_params
      params.require(:member).permit(:name, :number, :spouse, :checkbox_value, :birthdate, :deathdate, :note, :search)
    end

end
