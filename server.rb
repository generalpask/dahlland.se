require "sinatra"
set :bind, '0.0.0.0'
set :port, 80

get "/" do 
    send_file "./views/index.html"
end

get "/about" do
    send_file "./views/content/about.html"
end

get "/players" do
    send_file "./views/content/players.html"
end