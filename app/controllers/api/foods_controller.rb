class Api::FoodsController < ApplicationController
    before_action :get_food, only: [:update, :destroy]
    before_action :get_menu

    def index
        render( json: @menu.foods )
    end

    def create
        food = Food.new(food_params())

        if(food.save())
            render( json: food )
        else
            render( json: { error: food.errors, response_text: "Data Not Created" }, status: 422 )
        end
    end

    def update
        if(@food.update(food_params()))
            render( json: @food )
        else
            render( json: { error: @food.errors, response_text: "Data Not Updated" }, status: 422)
        end
    end

    def destroy
        @food.destroy()
        render( json: { response_text: "Data Deleted" })
    end

    private
        def food_params
            return params.require(:food).permit(:name, :price, :menu_id)
        end

        def get_food
            return @food = Food.find(params[:id])
        end

        def get_menu
            return @menu = Menu.find(params[:menu_id])
        end
end
