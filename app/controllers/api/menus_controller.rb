class Api::MenusController < ApplicationController
    before_action :get_menu, only: [:update, :destroy]

    def index
        render( json: Menu.all() )
    end

    def create
        menu = Menu.new(menu_params())

        if(menu.save())
            render( json: menu )
        else
            render( json: {error: menu.errors, response_text: "Data Not Created"}, status: 422 )
        end
    end

    def update
        if(@menu.update(menu_params()))
            render( json: @menu  )
        else
            render( json: {error: @menu.errors, response_text: "Data Not Updated"}, status: 422 )
        end
    end

    def destroy
        @menu.destroy()
        render( json: {response_text: "Data Deleted" } )
    end

    private
        def menu_params
            return params.require(:menu).permit(:name, :timeStart, :timeEnd)
        end

        def get_menu
            return @menu = Menu.find(params[:id])
        end
end
