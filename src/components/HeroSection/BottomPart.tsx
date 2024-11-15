import { DollarSign, KeyRound, Timer } from "lucide-react";

const BottomPart = () => {
  return (
    <div className="relative mt-8 grid md:grid-cols-3">
      <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
        <Timer />
        <div>
          <h3 className="text-lg font-medium">Maximize efficiency</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Skip the manual tasks and complex setups. With Streamline, you can
            focus on what matters most while the system handles the rest.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
        <DollarSign />
        <div>
          <h3 className="text-lg font-medium">Optimize resources</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Don’t overspend on unnecessary tools or teams. Keep your operations
            lean and efficient by automating your workflows with Streamline.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
        <KeyRound />
        <div>
          <h3 className="text-lg font-medium">Simplify operations</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Say goodbye to managing multiple platforms. Streamline takes care of
            all the heavy lifting, ensuring consistent results with minimal
            hassle.
          </p>
        </div>
      </div>
      <div className="absolute -inset-x-4 top-0 h-px bg-input md:hidden"></div>
      <div className="absolute -inset-x-4 top-[-0.5px] row-start-2 h-px bg-input md:hidden"></div>
      <div className="absolute -inset-x-4 top-[-0.5px] row-start-3 h-px bg-input md:hidden"></div>
      <div className="absolute -inset-x-4 bottom-0 row-start-4 h-px bg-input md:hidden"></div>
      <div className="absolute -left-2 -top-2 bottom-0 w-px bg-input md:hidden"></div>
      <div className="absolute -right-2 -top-2 bottom-0 col-start-2 w-px bg-input md:hidden"></div>
      <div className="absolute -inset-x-2 top-0 hidden h-px bg-input md:block"></div>
      <div className="absolute -top-2 bottom-0 left-0 hidden w-px bg-input md:block"></div>
      <div className="absolute -left-[0.5px] -top-2 bottom-0 col-start-2 hidden w-px bg-input md:block"></div>
      <div className="absolute -left-[0.5px] -top-2 bottom-0 col-start-3 hidden w-px bg-input md:block"></div>
      <div className="absolute -top-2 bottom-0 right-0 hidden w-px bg-input md:block"></div>
    </div>
  );
};
export default BottomPart;
