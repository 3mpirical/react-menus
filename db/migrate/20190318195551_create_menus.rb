class CreateMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.string :name
      t.string :timeStart
      t.string :timeEnd

      t.timestamps
    end
  end
end
