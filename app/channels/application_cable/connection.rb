module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
      logger.add_tags "ActionCable", "User #{current_user.id}"
    end

    private

    def find_verified_user
      if current_user = env["warden"].user
        puts env["warden"]
        current_user
      else
        reject_authorized_connection
      end
    end
  end
end
