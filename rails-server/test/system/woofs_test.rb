require "application_system_test_case"

class WoofsTest < ApplicationSystemTestCase
  setup do
    @woof = woofs(:one)
  end

  test "visiting the index" do
    visit woofs_url
    assert_selector "h1", text: "Woofs"
  end

  test "creating a Woof" do
    visit woofs_url
    click_on "New Woof"

    fill_in "Content", with: @woof.content
    fill_in "Name", with: @woof.name
    click_on "Create Woof"

    assert_text "Woof was successfully created"
    click_on "Back"
  end

  test "updating a Woof" do
    visit woofs_url
    click_on "Edit", match: :first

    fill_in "Content", with: @woof.content
    fill_in "Name", with: @woof.name
    click_on "Update Woof"

    assert_text "Woof was successfully updated"
    click_on "Back"
  end

  test "destroying a Woof" do
    visit woofs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Woof was successfully destroyed"
  end
end
