// src/layouts/AdminLayout.tsx
import React from "react";
import FooterAdmin from "../components/FooterAdmin";
import HeaderAdmin from "../components/HeaderAdmin";
import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
	return (
		<div>
			<HeaderAdmin />
			<div className="admin-content">
				<Outlet />
			</div>
			<FooterAdmin />
		</div>
	);
};

export default AdminLayout;
