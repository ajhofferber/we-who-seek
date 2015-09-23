class MembersController < ApiController

  def memberParams
    @member_params = @member_params || JSON.parse(request.body.read.to_s)
  end

  get '/' do
    content_type :json
    Member.all.to_json #really just want for specific user
  end

  post '/' do
    content_type :json
    member = Member.create( params[:member] || memberParams )
    member.to_json
  end

  delete '/:id' do
    content_type :json
    Member.destroy(params[:id])
    halt 202 #everything's fine!
  end

end
