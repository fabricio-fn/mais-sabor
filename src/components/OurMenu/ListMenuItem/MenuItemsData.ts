interface iMenuItems {
  image: string;
  name: string;
  description: string;
  price: string;
}

export const menuItems: iMenuItems[] = [
  {
    image: "/img/riceBowl.jpg",
    name: "Rice Bowl",
    description: "Delicious rice bowl",
    price: "$13",
  },
  {
    image: "/img/pizza.jpg",
    name: "Style Pizza",
    description: "Pizza filled with tomatoes",
    price: "$6.5",
  },
  {
    image: "/img/burger.jpg",
    name: "Burger",
    description: "Vegetables and cheese lettuce",
    price: "$12.5",
  },
]