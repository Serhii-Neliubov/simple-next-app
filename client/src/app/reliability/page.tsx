import reliabilityImage from "public/reliability.jpg";
import Hero from "@/components/hero";

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImage}
      imgAlt="welding"
      title="Super high reliability hosting"
    ></Hero>
  );
}
