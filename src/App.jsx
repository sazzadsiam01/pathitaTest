import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="scroll-smooth">
            <Navbar />
            <Hero />
        </div>
    );
}