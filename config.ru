require "bundler"
Bundler.require()


#require models

#require controllers
require './controllers/application_controller'
require './controllers/welcome_controller'

#require routes
map('/'){ run WelcomeController }
