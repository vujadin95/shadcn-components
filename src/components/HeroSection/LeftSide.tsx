import { Button } from "../ui/button";

const LeftSide = () => {
  return (
    <div className="w-full max-w-[450px] shrink-0 justify-between">
      <p className="text-xs text-muted-foreground lg:text-sm">
        What’s the solution?
      </p>
      <h2 className="mb-3 mt-6 text-3xl font-medium lg:text-5xl lg:leading-snug">
        Optimizacija procesa grejanja, hlađenja i klimatizacije.
      </h2>
      <p className="text-base md:text-lg">
        Mi smo inovatori koji neprekidno nastoje da poboljšaju svoje sisteme i
        rešenja.
      </p>

      <Button variant={"default"} className="mt-3">
        Contact Us
      </Button>
    </div>
  );
};
export default LeftSide;
