require 'rails_helper'

feature 'sign_up' do 
  scenario 'new user signs up with valid email & password' do 
    sign_up("test@testuser.com", "password123", "password123")

    expect(page.find('.alert')).to have_content "Welcome! You have signed up successfully."
    expect(current_path).to eq root_path
  end

  scenario 'user tries to sign up with an existing email' do 
    create(:user, email: "test@testuser.com", password: "password123", password_confirmation: "password123")
    sign_up("test@testuser.com", "password123", "password123")
    
    expect(page).to have_content 'has already been taken'
  end


  def sign_up(email, password, password_confirmation)
    visit root_path
    click_on "Sign up"
    fill_in "email-input", with: email
    fill_in "password-input", with: password
    fill_in "password-conf-input", with: password_confirmation
    click_button "Sign up"
  end

end