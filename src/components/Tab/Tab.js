"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import arrow from "../../../public/Images/arrow.svg";
import check from "../../../public/Images/check.svg";
import customizeTwo from "../../../public/Images/customize-small.svg";
import customizeOne from "../../../public/Images/customize.svg";
import widgetTwo from "../../../public/Images/tab-widget-small.svg";
import widgetOne from "../../../public/Images/tab-widget.svg";
import ConversionRate from "../ConversionRate/ConversionRate";
import MonthlyRevenue from "../MonthlyRevenue/MonthlyRevenue";
import Sales from "../Sales/Sales";
import TotalRevenue from "../TotalRevenue/TotalRevenue";
import styles from "./Tab.module.css";
const Tab = () => {
	const [counterOn, setCounterOn] = useState(false);

	return (
		<div className="py-20">
			<div>
				<div className="relative flex justify-end bg-[#ECF8FF] h-[680px] xl:h-[575px] w-full lg:w-[55%]">
					<ScrollTrigger
						onEnter={() => setCounterOn(true)}
						onExit={() => setCounterOn(false)}
					>
						<div className="absolute left-6 top-48 xl:top-28 shadow-xl rounded-xl">
							{counterOn && <MonthlyRevenue />}
						</div>
						<div className="absolute right-3 xl:right-4 top-6 xl:top-10 shadow-xl rounded-xl">
							{counterOn && <TotalRevenue />}
						</div>
						<div className="absolute right-2 bottom-40 xl:bottom-44 shadow-xl rounded-3xl">
							{counterOn && <Sales />}
						</div>
						<div className="absolute left-5 lg:left-44 bottom-10 xl:bottom-16 shadow-xl rounded-3xl">
							{counterOn && <ConversionRate />}
						</div>
					</ScrollTrigger>
				</div>
			</div>
		</div>
	);
};

export default Tab;
