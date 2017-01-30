class CreateDemoPages < ActiveRecord::Migration[5.0]
  def change
    create_table :demo_pages do |t|

      t.timestamps
    end
  end
end
