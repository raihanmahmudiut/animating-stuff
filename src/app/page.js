import Growth from "@/components/Growth/Growth";
import SupportHome from "@/components/SupportHome/SupportHome";
import Tab from "@/components/Tab/Tab";
import "./page.css"
import "aos/dist/aos.css";

export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="gradient-background h-screen flex flex-col justify-center items-center">
                <h1 className="text-white text-4xl">Welcome to AnimNation</h1>
                <div className="scroll-down-animation text-white text-xl">Scroll down to explore</div>
            </div>
            <section className="bg-black">
                <div className="container mx-auto">
                    <Tab />
                </div>
            </section>
            <section className="bg-black">
                <div className="container mx-auto flex flex-row justify-end items-center">
                    <div className="lg:w-1/2">
                        <Growth />
                    </div>
                </div>
            </section>
            <section className="bg-black">
                <div className="container mx-auto flex flex-row items-center">
                    <div className="lg:w-1/2 flex justify-end">
                        <SupportHome />
                    </div>
                </div>
            </section>
        </div>
    );
}
