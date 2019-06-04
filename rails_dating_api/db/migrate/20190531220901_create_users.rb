class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :location
      t.integer :age
      t.string :profile_photo
      t.string :email
      t.string :gender
      

      t.timestamps
    end
  end
end
