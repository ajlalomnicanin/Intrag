import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { AboutUs } from "./page/HomeAbouUs";
import { Contact } from "./page/Contact";
import { MyLayout } from "./page/MyLayout";
import { Products } from "./page/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MyLayout>
        <Outlet />
      </MyLayout>
    ),
    children: [
      { index: true, element: <AboutUs /> },
      { path: "/Products/:id", element: <Products /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
