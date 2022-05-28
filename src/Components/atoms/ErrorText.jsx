import React from "react";

export default function ErrorText({ text }) {
	return (
		<p>
			<span className="text-orange-700">{text}</span>
		</p>
	);
}
