json.extract! user, :username, :id
json.set! 'errors' do
  user.errors.full_messages
end
