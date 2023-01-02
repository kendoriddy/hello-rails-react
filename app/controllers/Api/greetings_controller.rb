class GreetingsController < ApplicationsController
    before_action :set_greeting

    def show
    end

    private
    def set_greeting
        @greeting = Greeting.find(params[id])
    end
end