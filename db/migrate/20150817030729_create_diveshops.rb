class CreateDiveshops < ActiveRecord::Migration
  def change
    create_table :diveshops do |t|

      t.timestamps
    end
  end
end
