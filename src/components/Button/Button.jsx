import React from "react";

const Button = ({ text, type, fontSize }) => {
	return (
		<button
			className={`px-6 py-3 rounded-md text-${fontSize} ${
				type == "primary" &&
				"bg-deepYellow text-veryDarkBlue hover:bg-lightYellow hover:shadow-md hover:shadow-white"
			} ${
				type == "secondary" &&
				"bg-transparent text-veryDarkBlue border border-veryDarkBlue"
			} ${
				type == "default" && "bg-transparent text-white border border-gray-600"
			}`}
		>
			{text}
		</button>
	);
};

export default Button;
