class WelcomeController < ApplicationController

  get '/' do
    erb :index
  end

  get '/mailinglist' do
    erb :mailinglist
  end

end
