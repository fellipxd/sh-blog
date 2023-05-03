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
import Register from "./pages/Register";
import Write from "./pages/Write";
import Single from "./pages/Single";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="write" element={<Write />} />
          <Route path="post/:id" element={<Single />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route >
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
