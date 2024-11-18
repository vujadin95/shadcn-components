import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Background from "./Background";
import BottomPart from "./BottomPart";

import img3 from "../../../public/hero-slider-images/3.jpg";
import img4 from "../../../public/hero-slider-images/4.jpg";
import img6 from "../../../public/hero-slider-images/6.jpg";
import img7 from "../../../public/hero-slider-images/7.jpg";
import img8 from "../../../public/hero-slider-images/8.jpg";
import img9 from "../../../public/hero-slider-images/9.jpg";
import img10 from "../../../public/hero-slider-images/10.jpg";
import img11 from "../../../public/hero-slider-images/11.jpg";
import HeroCarousel from "./RightSide";

const slidesImage = [
  { src: img3, id: 1 },
  { src: img4, id: 2 },
  { src: img6, id: 3 },
  { src: img7, id: 4 },
  { src: img8, id: 5 },
  { src: img9, id: 6 },
  { src: img10, id: 7 },
  { src: img11, id: 8 },
];

const HeroSection = () => {
  return (
    <section className="py-[104px] lg:py-[144px]">
      <div className="relative">
        <Background />

        <div className="relative flex flex-col justify-between gap-10 lg:flex-row">
          {/* <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-background via-transparent to-transparent lg:block" /> */}

          <LeftSide />

          <HeroCarousel images={slidesImage} />
        </div>

        <BottomPart />
      </div>
    </section>
  );
};

export default HeroSection;
