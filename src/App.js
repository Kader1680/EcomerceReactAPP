import "./index.css"
import Header from "./components/header"
import Home from "./pages/Home";
import {fetchData } from "./api/Api"
import Cart from "./pages/Cart"
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import SinglProduct from "./components/SinglProduct";
const Layout = () =>{
    return(
      <div>
        <Header />
        <Outlet />
      </div>
    )
}
const router = createBrowserRouter([
      {
        path:"/",
        element: <Layout />,
        children: [
          {
            path:"/",
            element: <Home/>,
            loader: fetchData,
          },
          {
            path:"/Cart",
            element: <Cart/>,
            
          },
          
          {
            path: "/product",
            element: <SinglProduct/>,
          }
          
        ]

      }

])
function App() {
  return (
    <div >
       <RouterProvider router={router} />

      
       {/* <Header />
       <Home/> */}
    </div>
  );
}

export default App;
