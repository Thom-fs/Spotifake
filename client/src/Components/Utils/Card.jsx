import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline/index.js";
import { Link } from "react-router-dom";

export default function Card({
	imgLink,
	title,
	artist,
	year,
	onClickLink,
	onDelete,
	showDeleteIcon,
}) {
	return (
		<div className="flex flex-col bg-light w-48 h-64 rounded-xl p-4 mx-auto hover:bg-gradient-to-b hover:from-primary/25 hover:to-secondary/50">
			<Link to={onClickLink}>
				<img
					className="w-32 h-32 rounded-xl mx-auto mb-8"
					src={imgLink ? imgLink : "../jambon-beurre-logo.svg"}
					alt="Couverture de l'album"
				/>
				<div className="flex flex-col justify-center">
					<h3 className="text-gray-100 text-sm font-semibold tracking-wider truncate">
						{title}
					</h3>
					<h4 className="text-gray-400 text-sm tracking-wider truncate">
						{artist}
					</h4>
					<h5 className="text-gray-400 text-sm tracking-wider truncate">
						{year}
					</h5>
				</div>
			</Link>
			{showDeleteIcon && (
				<div className="text-end mt-4">
					<button
						onClick={(event) => {
							event.stopPropagation();
							onDelete();
						}}
					>
						<TrashIcon className=" h-6 w-6 text-gray-400 hover:text-purple-300 hover:animate-spin " />
					</button>
				</div>
			)}
		</div>
	);
}
