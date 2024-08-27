require_relative '\\wsl.localhost\Ubuntu\root\automation\spec\login_page.rb'
describe 'login spec' do 
    context 'basic test' do 
       
       it "window working" do 
         login_page = LoginPage.new
         login_page.navigate
         dashboard = login_page.login
         
         expect(login_page.title).to eq('Swag Labs')
       end
       
    end 
 end