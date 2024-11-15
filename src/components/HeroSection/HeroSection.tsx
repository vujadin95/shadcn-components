import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Background from "./Background";
import BottomPart from "./BottomPart";

const HeroSection = () => {
  return (
    <section className="py-[104px] lg:py-[144px]">
      <div className="relative">
        <Background />

        <div className="relative flex flex-col justify-between gap-10 lg:flex-row">
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-background via-transparent to-transparent lg:block" />

          <LeftSide />

          <RightSide />
        </div>

        <BottomPart />
      </div>
    </section>
  );
};

export default HeroSection;
