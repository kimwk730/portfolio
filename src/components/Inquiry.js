import React from "react";
import "../styles/Inquiry.css";

function Inquiry() {
	return (
		<div className="inquiryBox">
			<div>
				<h2>Work Inquiry</h2>
				<h3>Let's work together</h3>
			</div>
			<a href="../contact">
				<button>
					<strong>Contact me</strong>
				</button>
			</a>
		</div>
	);
}

export default Inquiry;
