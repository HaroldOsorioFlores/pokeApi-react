import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";
import { Home, SearchPokemon } from "../pages";
import { RouterProvider } from "react-router-dom";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/SearchPokemon",
          element: <SearchPokemon />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}> </RouterProvider>
    </>
  );
};

export default Routes;
