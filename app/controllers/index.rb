get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/sign_up' do
	User.create(email: params[:email], password: params[:password])

redirect to '/'
end

get '/sign_up' do

end