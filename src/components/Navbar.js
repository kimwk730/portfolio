import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Navbar.css";

function Navbar() {
	const [expandNavbar, setExpandNavbar] = useState(false);

	const location = useLocation();

	useEffect(() => {
		setExpandNavbar(false);
	}, [location]);

	return (
		<div className="navbar" id={expandNavbar ? "open" : "close"}>
			<div className="toggleButton">
				<button
					onClick={() => {
						setExpandNavbar((prev) => !prev);
					}}
				>
					{" "}
					<FontAwesomeIcon icon="fa-solid fa-bars" />{" "}
				</button>
			</div>
			<div className="links">
				<Link to="/"> Home </Link>
				<Link to="/projects"> Projects </Link>
				<Link to="/about"> About </Link>
				<Link to="/contact"> Contact </Link>
			</div>
		</div>
	);
}

export default Navbar;
