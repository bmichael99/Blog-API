import Root from "./Root";
import App from "./App";
import PostDirectory from "./PostDirectory";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true, // same as path: "/"
        element: <App />,
      },
      {
        path: "/posts", // same as path: "/"
        element: <PostDirectory />,
      },
    ],
  },
];

export default routes;