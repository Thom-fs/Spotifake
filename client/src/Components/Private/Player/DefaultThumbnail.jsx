import React from "react";
import { TbMusic } from "react-icons/tb";

export const DefaultThumbnail = () => {
	return (
		<div className="bg-gradient-to-r from-primary to-secondary text-white justify-center items-center text-2xl rounded-lg flex w-full h-full">
			<TbMusic />
		</div>
	);
};
