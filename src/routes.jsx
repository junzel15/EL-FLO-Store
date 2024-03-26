import Home from "./views/Home";
import Products from "./views/Products";
import Order from "./views/Order";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Products",
    path: "/products",
    element: <Products />,
  },
  {
    name: "Order",
    path: "/order",
    element: <Order />,
  },
  {
    name: "Signup",
    path: "/signup",
    element: <Signup />,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
