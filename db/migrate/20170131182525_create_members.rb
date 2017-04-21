class CreateMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :members do |t|
      t.string :name
      t.integer :number, array: true, default: []
      t.boolean :spouse
      t.integer :birthdate
      t.integer :deathdate
      t.text :note

      t.timestamps
    end
  end
end