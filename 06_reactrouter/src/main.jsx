import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Roots from "./Roots.jsx";
import About from "./components/about/About.jsx";
import Home from "./components/home/Home.jsx";
import Contact from "./components/contact/Contact.jsx";
import User from "./components/user/User.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Roots />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// Define routes using createRoutesFromElements
const routes = createRoutesFromElements(
  <Route path="/" element={<Roots />}>
    <Route path="" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="user/:userid" element={<User />} />
  </Route>
);

// Create browser router
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
