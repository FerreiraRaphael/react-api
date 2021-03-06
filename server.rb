# This file provided by Facebook is for non-commercial testing and evaluation
# purposes only. Facebook reserves all rights not expressly granted.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
# FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
# ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
# WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

require 'webrick'
require 'json'

# default port to 3000 or overwrite with PORT variable by running
# $ PORT=3001 ruby server.rb
port = ENV['PORT'] ? ENV['PORT'].to_i : 3000

puts "Server started: http://localhost:#{port}/"

root = File.expand_path './public'
server = WEBrick::HTTPServer.new Port: port, DocumentRoot: root

server.mount_proc '/api/compannies' do |req, res|
  compannies = JSON.parse(File.read('./compannies.json', encoding: 'UTF-8'))

  if req.request_method == 'POST'
    # Assume it's well formed
    compannie = { id: (Time.now.to_f * 1000).to_i }
    req.query.each do |key, value|
      compannie[key] = value.force_encoding('UTF-8') unless key == 'id'
    end
    compannies << compannie
    File.write(
      './compannies.json',
      JSON.pretty_generate(compannies, indent: '    '),
      encoding: 'UTF-8'
    )
  end

  # always return json
  res['Content-Type'] = 'application/json'
  res['Cache-Control'] = 'no-cache'
  res['Access-Control-Allow-Origin'] = '*'
  res.body = JSON.generate(compannies)
end

trap('INT') { server.shutdown }

server.start
