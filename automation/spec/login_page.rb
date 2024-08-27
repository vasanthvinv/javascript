class LoginPage < SitePrism::Page
    set_url 'https://www.saucedemo.com/'
  
    element :title_element, 'div.login_logo'

    def navigate
        self.load
        sleep 5
    end

    def title
        title_element.text
    end
end

