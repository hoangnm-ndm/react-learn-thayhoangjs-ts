// src/layouts/ClientLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ClientLayout: React.FC = () => {
	return (
		<div>
			<Header />
			<div className="client-content">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default ClientLayout;
