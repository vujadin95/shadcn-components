import Image from "next/image";
import img1 from "../../../public/hero-slider-images/3.jpg";

const RightSide = () => {
  return (
    <div className="relative h-[400px] w-full max-w-3xl lg:h-[600px]">
      <Image
        src={img1}
        alt="placeholder"
        fill
        placeholder="blur"
        className="z-0 h-full w-full max-w-3xl rounded-lg border object-cover"
      />
    </div>
  );
};
export default RightSide;
