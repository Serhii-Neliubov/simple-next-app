import scaleImage from "public/scale.jpg";
import Hero from "@/components/hero";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImage}
      imgAlt="steel factory"
      title="Scale your app to infinity"
    ></Hero>
  );
}
