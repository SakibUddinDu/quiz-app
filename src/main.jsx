// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import NotFound from "./components/NotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Quiz from "./components/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound></NotFound>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "quiz/:quizId", element: <Quiz /> , loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)},
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
