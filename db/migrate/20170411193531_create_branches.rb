class CreateBranches < ActiveRecord::Migration[5.0]
  def change
    create_table :branches do |t|
    	t.integer :branch

      t.timestamps
    end
  end
end
