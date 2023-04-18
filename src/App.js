import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Profile from "./components/Profile";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/store";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Outlet className="outlet" />
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
        children: [{ path: "profile", element: <Profile /> }],
      },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
