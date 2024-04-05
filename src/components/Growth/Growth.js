"use client";
import CartConversion from "./CartConversion";
import CartDisplayed from "./CartDisplayed";
import WidgetRevenue from "./WidgetRevenue";
const Growth = () => {
	return (
		<div className="relative flex flex-row justify-center items-center">
			<div className="relative bg-[#ECF8FF] w-96 h-[600px] rounded-xl z-10">
				<div className="absolute top-40 left-4 lg:top-32 md:-left-10 lg:-left-20">
					<WidgetRevenue />
				</div>
				<div className="absolute top-2 right-0 lg:top-12 md:-right-20 lg:-right-44">
					<CartConversion />
				</div>
				<div className="absolute top-96 right-0 md:-right-24 lg:-right-32">
					<CartDisplayed />
				</div>
			</div>
		</div>
	);
};

export default Growth;
