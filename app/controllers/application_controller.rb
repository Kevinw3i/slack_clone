class ApplicationController < ActionController::Base
  
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  before_action :set_locale

  def set_locale
    # 可以將 ["en", "zh-TW"] 設定為 VALID_LANG 放到 config/environment.rb 中
    if params[:locale] && I18n.available_locales.include?( params[:locale].to_sym )
      session[:locale] = params[:locale]
    end
    I18n.locale = session[:locale] || I18n.default_locale
  end

  def after_sign_in_path_for(resource)
    workspace_channel_path(session[:workspace_id], session[:channel]) if session[:workspace_id] && session[:channel]
    workspaces_path
  end

  private

  def not_found
    render file: '/public/404',
           status: 404,
           layout: false
  end
  
end
