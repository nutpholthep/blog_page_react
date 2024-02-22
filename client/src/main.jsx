import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./component/Layout";
import ErrorPage from "./pages/ErrorPage";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Authors from "./pages/Authors";
import CreatePosts from "./pages/CreatePosts";
import EditPost from "./pages/EditPost";
import AuthorPosts from "./pages/AuthorPosts";
import Dashboard from "./pages/Dashboard";
import CategoryPosts from "./pages/CategoryPosts";
import Logout from "./pages/Logout";
import DeletePost from "./pages/DeletePost";
import UserProvider from "./context/userContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProvider><Layout /></UserProvider>,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "post/:id", element: <PostDetail /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "authors", element: <Authors /> },
      { path: "create", element: <CreatePosts /> },
      { path: "post/:id/edit", element: <EditPost /> },
      { path: "post/:id/delete", element: <DeletePost /> },
      { path: "post/user/:id", element: <AuthorPosts /> },
      { path: "mypost/:id", element: <Dashboard /> },
      { path: "post/categories/:category", element: <CategoryPosts /> },
      { path: "logout", element: <Logout /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
