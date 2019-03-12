require "sinatra"
#set :bind, '0.0.0.0'
set :port, 4567

get "/" do 
    send_file "./views/index.html"
end

get "/info" do
    send_file "./views/content/info.html"
end