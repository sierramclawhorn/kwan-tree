class CreateMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :members do |t|
      t.string :name
      t.string :number
      t.integer :birthdate
      t.integer :deathdate
      t.string :location
      t.text :note

      t.timestamps
    end
  end
end