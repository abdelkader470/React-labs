import { Component } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Parent from "./components/Parent/Parent";
import Artist from "./components/Artist/Artist";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "artist", element: <Artist /> },
      { path: "contact", element: <Contact /> },
      { path: "lab1", element: <Parent /> },
    ],
  },
]);
class App extends Component {
  render() {
    return <RouterProvider router={routes}></RouterProvider>;
  }
}
export default App;

{
  /* <Parent /> */
}
