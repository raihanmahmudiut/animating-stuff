
import "./page.css";
import "aos/dist/aos.css";
import Animations from "@/components/Growth/Animations";

export default function Home() {
	return (
		<div className="flex flex-col">
			<div className="gradient-background h-screen flex flex-col justify-center items-center">
				<h1 className="text-white text-4xl">Welcome to AnimNation</h1>
				<div className="scroll-down-animation text-white text-xl">
					Scroll down to explore
				</div>
			</div>

			<section className="bg-black">
				<div className="container mx-auto ">
					<div className="lg:w-1/2 flex justify-end pb-10">
						<Animations />
					</div>
				</div>
			</section>
		</div>
	);
}
