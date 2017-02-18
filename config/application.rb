require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module DemoWebpackerReact
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Support /app/view .rb classes and /app/templates files.
    config.eager_load_paths << (Rails.root + "app/views/concerns").to_s
    config.eager_load_paths << (Rails.root + "app/views").to_s
    config.to_prepare do
      ActionController::Base.send(:view_paths=, Rails.root.join("app", "templates"))
      ActionController::API.send(:view_paths=, Rails.root.join("app", "templates"))
    end

    # Compile fonts
    config.assets.precompile << /\.(?:svg|eot|woff|ttf)$/
  end
end
