import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<>
			<header>
				<h1>Header</h1>
				<nav>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/products">Products</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
