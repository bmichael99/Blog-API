import Root from "./Root";
import App from "./App";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Users from "./Users";
import PostDirectory from "./PostDirectory";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/posts",
    element: <PostDirectory />,
  },
  {
    path: "/log-in",
    element: <LogIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/users",
    element: <Users />,
  },
];

export default routes;