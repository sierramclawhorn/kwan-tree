class CreateMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :members do |t|
      t.string :name
      t.string :number
      t.date :birthdate
      t.date :deathdate
      t.string :location

      t.timestamps
    end
  end
end