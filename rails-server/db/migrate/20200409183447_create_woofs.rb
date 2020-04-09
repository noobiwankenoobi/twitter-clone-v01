class CreateWoofs < ActiveRecord::Migration[6.0]
  def change
    create_table :woofs do |t|
      t.string :name
      t.string :content

      t.timestamps null: false
    end
  end
end
