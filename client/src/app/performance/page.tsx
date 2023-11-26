import performanceImage from "public/performance.jpg";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImage}
      imgAlt="performance image"
      title="We serve high performance applications"
    ></Hero>
  );
}
