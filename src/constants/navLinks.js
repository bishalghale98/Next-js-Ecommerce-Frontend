const navLinks = [
  {
    route: "/",
    label: "Home",
    isAuth: false,
  },
  {
    route: "/about",
    label: "About",
    isAuth: false,
  },
  {
    route: "/contact-us",
    label: "Contact us",
    isAuth: false,
  },
  {
    route: "/products",
    label: "Products",
    isAuth: false,
  },
  {
    route: "/cart",
    label: "Cart",
    isAuth: true,
  },
  {
    route: "/news",
    label: "News",
    isAuth: true,

    subMenu: [
      {
        route: "/news/sports",
        label: "Sports",
      },
      {
        route: "/news/politics",
        label: "Politics",
      },
    ],
  },
];

export default navLinks;
