// src/router/index.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientLayout from "../layouts/ClientLayout";
import EmptyLayout from "../layouts/EmptyLayout";
import Dashboard from "../pages/admin/Dashboard";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../pages/ProductPage";
import AdminLayout from "../layouts/AdminLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ClientLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/products",
				element: <ProductPage />,
			},
		],
	},
	{
		path: "/admin",
		element: <AdminLayout />,
		children: [
			{
				path: "dashboard",
				element: <Dashboard />,
			},
		],
	},
	{
		path: "/auth",
		element: <EmptyLayout />,
		children: [
			{
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "register",
				element: <RegisterPage />,
			},
		],
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
]);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}
