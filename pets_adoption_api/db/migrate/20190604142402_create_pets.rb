class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :breed
      t.string :photo
      t.string :location
      t.integer :age
      t.string :description

      t.timestamps
    end
  end
end
