require 'test_helper'

class WoofsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @woof = woofs(:one)
  end

  test "should get index" do
    get woofs_url
    assert_response :success
  end

  test "should get new" do
    get new_woof_url
    assert_response :success
  end

  test "should create woof" do
    assert_difference('Woof.count') do
      post woofs_url, params: { woof: { content: @woof.content, name: @woof.name } }
    end

    assert_redirected_to woof_url(Woof.last)
  end

  test "should show woof" do
    get woof_url(@woof)
    assert_response :success
  end

  test "should get edit" do
    get edit_woof_url(@woof)
    assert_response :success
  end

  test "should update woof" do
    patch woof_url(@woof), params: { woof: { content: @woof.content, name: @woof.name } }
    assert_redirected_to woof_url(@woof)
  end

  test "should destroy woof" do
    assert_difference('Woof.count', -1) do
      delete woof_url(@woof)
    end

    assert_redirected_to woofs_url
  end
end
