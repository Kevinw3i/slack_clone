class SendChannelMessageJob < ApplicationJob
  queue_as :default

  def perform(message, channel_id)
    ActionCable.server.broadcast "channels:#{channel_id}", {
      message: ApplicationController.render(
                partial: 'messages/message_broadcast',
                locals: { message: message }
              ),
      user: "#{message.user.nickname}",
      from: "#{message.channel.name}"
    }
  end
end
