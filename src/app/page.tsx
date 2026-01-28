import Navbar from "../components/Shared/Navbar";
import SliderVideo from "../components/SliterVideo/SliterVideo";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black">
      <Navbar />
      <SliderVideo />
    </div>
  );
}
