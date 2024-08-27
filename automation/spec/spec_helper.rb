
require 'capybara'
require 'capybara/rspec'
require 'selenium-webdriver'
require 'site_prism'
require 'webdrivers/chromedriver'
require 'byebug'
# require 'capybara/dsl'

# include Capybara::DSL
# Selenium::WebDriver::Chrome.path = '/home/vasanth/.webdrivers/chromedriver'

Capybara.register_driver :webdriver do |app|
  Capybara::Selenium::Driver.new(app, browser: :chrome)
end


# Then tell Capybara to use the Driver you've just defined as its default driver
Capybara.configure do |config|
  config.default_driver = :webdriver
end
Capybara.page.driver.browser.manage.window.resize_to(1024, 768)