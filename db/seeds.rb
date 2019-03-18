

Menu.destroy_all()

Menu.create(
    name: "breakfast",
    timeStart: "6:00 AM",
    timeEnd: "10:00 AM",
)
Menu.create(
    name: "lunch",
    timeStart: "10:00 AM",
    timeEnd: "3:00 PM",
)
Menu.create(
    name: "dinner",
    timeStart: "3:00 PM",
    timeEnd: "11:00 PM",
)

Menu.all().each() {|menu| 
    for i in (1..10)
        Food.create(
            menu_id: menu.id,
            name: Faker::Food.dish(),
            price: "#{Faker::Commerce.price()}",
        )
    end
}

puts "_____Database_Seeded_____"