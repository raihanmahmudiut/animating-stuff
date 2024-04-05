"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import upArrow from "../../../public/Images/Up-arrow.svg";
import styles from "./TotalRevenue.module.css";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
const TotalRevenue = () => {
	const [counterOn, setCounterOn] = useState(false);
	return (
		<ScrollTrigger
			onEnter={() => setCounterOn(true)}
			onExit={() => setCounterOn(false)}
		>
			<div className="w-full flex flex-col gap-6 p-4 bg-white rounded-2xl">
				<div className="flex flex-row gap-4 xl:gap-12">
					<div className="flex flex-col justify-between ">
						<h5 className="font-bold text-[14px] xl:text-[18px]">
							Total Revenue
						</h5>
						<p className="text-[17px] xl:text-[23px] font-semibold w-[60px]">
							${counterOn && <CountUp end={51200} duration={2} />}
						</p>
					</div>
					<div className="flex items-center">
						<Image src={upArrow} alt="up arrow" />
						<p className="text-green-500 w-[50px]">
							{counterOn && <CountUp end={55.2} decimals={2} duration={2} />}%
						</p>
					</div>
				</div>

				{counterOn && (
					<div>
						<svg
							viewBox="0 0 195 54"
							fill="none"
							width="260"
							xmlns="http://www.w3.org/2000/svg"
						>
							<defs>
								<linearGradient
									id="paint0_linear_612_10891"
									x1="97.9374"
									y1="0.39502"
									x2="97.9374"
									y2="40.4187"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#C8EBFF" />
									<stop offset="1" stop-color="#C8EBFF" stop-opacity="0" />
								</linearGradient>
							</defs>
							<path
								d="M22.5839 22.9648L1.78369 40.4187H194.091V19.3536L157.974 0.39502L134.149 28.231L95.7629 10.9276L55.7423 32.6529L22.5839 22.9648Z"
								fill="url(#paint0_linear_612_10891)"
								transform="matrix(1, 0, 0, 1, -8.881784197001252e-16, 0)"
								className={styles.draw}
							/>
							<motion.path
								d="M0.797363 53.2627L21.5976 35.8088L54.756 45.3476L94.7766 23.7716L133.162 41.075L156.988 13.239L193.105 32.1976"
								stroke="#00B3FF"
								stroke-width="0.597369"
								stroke-linecap="round"
								stroke-linejoin="round"
								transform="matrix(1, 0, 0, 1, -8.881784197001252e-16, 0)"
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{ duration: 3, ease: "linear" }}
							/>
							<circle
								cx="157.849"
								cy="14.2842"
								r="1.64276"
								fill="white"
								stroke="#00B3FF"
								stroke-width="0.597369"
								transform="matrix(1, 0, 0, 1, -8.881784197001252e-16, 0)"
							/>
						</svg>
					</div>
				)}
			</div>
		</ScrollTrigger>
	);
};

export default TotalRevenue;
