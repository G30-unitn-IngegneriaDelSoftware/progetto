import React from "react";
import { CookiesProvider } from "react-cookie";
import { withCookies } from "react-cookie";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  redirect,
} from "react-router-dom";
import "./index.css";
import Register from "./pages/Register";
import Account from "./pages/Accunt";
import Appartamento from "./Layouts/Appartamento";
import Bacheca from "./pages/Bacheca";
import Calendario from "./pages/Calendario";
import Login from "./pages/Login";
import Spese from "./pages/Spese";
import ToDo from "./pages/Todo";
import Turni from "./pages/Turni";
import Appartamenti from "./pages/Appartamenti";
import Principale from "./pages/Principale";
import "./index.css";
import axios from "axios";
import { useCookies } from "react-cookie";

axios.defaults.withCredentials = true;

const defaultPath = "https://is-2024-backend.vercel.app"; // PER IL COLLEGAMENTO AL BACK-END MODIFICA QUI
export default defaultPath

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="appartamenti" element={<Appartamenti />} />
      <Route path="appartamento" element={<Appartamento />}>
        <Route index element={<Principale />} />
        <Route path="bacheca" element={<Bacheca />} />
        <Route path="turni" element={<Turni />} />
        <Route path="spese" element={<Spese />} />
        <Route path="calendario" element={<Calendario />} />
        <Route path="todo" element={<ToDo />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);
