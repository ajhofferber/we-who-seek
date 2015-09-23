require "bundler"
Bundler.require()


#require models
require './models/member'

#require controllers
require './controllers/application_controller'
require './controllers/welcome_controller'
require './controllers/api/api_controller'
require './controllers/api/members_controller'

#require routes
map('/'){ run WelcomeController }
map('/api/members'){ run MembersController }
