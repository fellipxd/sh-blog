import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Register from "./pages/Register";
import "./tommy.css";
import Single from "./pages/Single";
import UserProfile from "./pages/UserProfile";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="blog/:id" element={<Single />} />
          <Route path="write" element={<Write />} />
          <Route path="user" element={<UserProfile />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
