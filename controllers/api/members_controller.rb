class TasksController < ApiController

  # def current_api_user!
  #   if env['HTTP_TOKEN']
  #     User.find_by({token: env['HTTP_TOKEN']})
  #   else
  #     halt 401
  #   end
  # end

  def memberParams
    @member_params = @member_params || JSON.parse(request.body.read.to_s)
  end

  get '/' do
    content_type :json
    members.to_json #really just want for specific user
  end

  post '/' do
    content_type :json
    member = members.create( params[:member] || memberParams )
    member.to_json
  end

  put '/api/todos/:id' do
    new_member = members.find(params[:id])
    new_member.update(params[:member] || new_memberParams)
    new_member.to_json
  end

  delete '/:id' do
    content_type :json
    members.destroy(params[:id])
    halt 202 #everything's fine!
  end

end
