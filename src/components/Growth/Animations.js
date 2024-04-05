"use client";
import ScrollTrigger from "react-scroll-trigger";
import ConversionRate from "../ConversionRate/ConversionRate";
import MonthlyRevenue from "../MonthlyRevenue/MonthlyRevenue";
import Sales from "../Sales/Sales";
import TotalRevenue from "../TotalRevenue/TotalRevenue";
import CartConversion from "./CartConversion";
import CartDisplayed from "./CartDisplayed";
import WidgetRevenue from "./WidgetRevenue";
import { useState } from "react";
const Animations = () => {
	const [counterOn, setCounterOn] = useState(false);
	return (
		
		<div className="relative flex flex-row justify-center items-center">
			<div className="relative rounded-xl z-10">
				<div className="absolute top-40 left-4 lg:top-32 md:-left-10 lg:-left-0">
					<WidgetRevenue />
				</div>
				<div className="absolute top-2 left-0 lg:top-12 md:left-20 lg:left-44">
					<CartConversion />
				</div>
				<div className="absolute top-96 left-0 md:left-24 lg:left-32">
					<CartDisplayed />
				</div>
				<div className="relative flex justify-end bg-[#ECF8FF] h-[680px] xl:h-[575px] w-full lg:w-[55%]">
					
						<div className="absolute right-80 top-48 xl:top-28 shadow-xl rounded-xl">
							<MonthlyRevenue />
						</div>
						<div className="absolute right-3 xl:right-4 top-6 xl:top-10 shadow-xl rounded-xl">
							 <TotalRevenue />
						</div>
						<div className="absolute right-2 bottom-40 xl:bottom-44 shadow-xl rounded-3xl">
							<Sales />
						</div>
						<div className="absolute right-5 lg:right-44 bottom-10 xl:bottom-16 shadow-xl rounded-3xl">
							<ConversionRate />
						</div>
				
				</div>
			</div>
		</div>
	);
};

export default Animations;
