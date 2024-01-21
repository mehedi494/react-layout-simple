import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import RootLayout from "../layout/RootLayout";
import Content from "../Content/Content";
import Content2 from "../Content/Content2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "/", element: <Content /> },
      {
        path: "content-2",
        element: <Content2></Content2>,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    children: [
      /*  {
          path:"again",
          element:<Header/  >
        } */
    ],
  },
]);
export default router;
