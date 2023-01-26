import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NuevoCliente, {
  action as nuevoClienteAction,
} from "./pages/NuevoCliente";

import Index, { loader as clientesLoader } from "./pages/Index";

import EditarCliente, {
  loader as editarClienteLoader,
  action as editarClienteAction,
} from "./pages/EditarCliente";

import ErrorPage from "./components/ErrorPages";

import { action as eliminarCLienteAction } from "./components/Cliente";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />,
      },

      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/:clienteId/editar",
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/:clienteId/eliminar",
        action: eliminarCLienteAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
