const navLinks = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/contact-us",
    label: "Contact us",
  },
  {
    route: "/products",
    label: "Products",
  },
  {
    route: "/cart",
    label: "Cart",
  },
  {
    route: "/news",
    label: "News",
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
