class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.belongs_to :pet, index: true
      t.belongs_to :owner, index: true
  

      t.timestamps
    end
  end
end
