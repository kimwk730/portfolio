import React from "react";
import { Link } from "react-router-dom";

import "../styles/Inquiry.css";

function Inquiry() {
	return (
		<div className="inquiryBox">
			<div>
				<h2>Work Inquiry</h2>
				<h3>Let's work together</h3>
			</div>

			<button>
				<Link to="/contact" className="linkButton">
					<strong>Contact me</strong>
				</Link>
			</button>
		</div>
	);
}

export default Inquiry;
