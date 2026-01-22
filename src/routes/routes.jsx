import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../components/App";
import NotFound from "../components/NotFound/NotFound";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const RootLayout = () => <Outlet />;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
