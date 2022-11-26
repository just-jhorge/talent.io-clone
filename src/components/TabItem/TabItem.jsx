import React from "react";
import Button from "../Button/Button";

const TabItem = ({ header, buttonText, list, imgSrc }) => {
	return (
		<div className="flex items-center justify-center gap-5 px-20">
			<div className="flex-1">
				<img src={imgSrc} />
			</div>
			<div className="flex-1 flex flex-col items-start gap-5">
				<h3 className="text-3xl text-start">{header}</h3>
				<ul className="text-start">
					{list.map((item) => (
						<li key={item.id} className="list-item">
							{item.text}
						</li>
					))}
				</ul>
				<div className="flex items-center justify-center gap-3">
					<Button text="Learn more" type="default" fontSize="sm" />
					<Button text={buttonText} type="primary" fontSize="sm" />
				</div>
			</div>
		</div>
	);
};

export default TabItem;
