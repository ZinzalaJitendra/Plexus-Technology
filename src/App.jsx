import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Page/Home/Home";
import AboutUs from "./Page/AboutUs/AboutUs";
import ContactUs from "./Page/ContactUs/ContactUs";
import Culture from "./Page/Culture/Culture";
import Hiring from "./Page/Hiring/Hiring";
import Portfolio from "./Page/Portfolio/Portfolio";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import RootLayout from "./Layout/RootLayout";
function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/culture" element={<Culture/>}></Route>
        <Route path="/hiring" element={<Hiring/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
