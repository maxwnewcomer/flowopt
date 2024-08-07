import NavMenu from "@/components/nav";
import { Button } from "@/components/ui/button";
import type { MetaFunction } from "@remix-run/node";
import { ArrowRight } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "flowopt" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const version = "0.1.0";
  return (
    <div className="font-sans">
      <div className="h-full flex flex-col max-h-screen min-h-screen">
        <nav className="sticky border-b w-full border-base-6 flex justify-between items-center p-2 gap-2">
          <div />
          {/* <span className="font-workbench font-semibold text-xl">flowopt</span> */}
          <NavMenu />
          <div className="flex justify-between gap-2">
            <Button variant={"outline"}>Login</Button>
          </div>
        </nav>
        <div className="flex-grow p-8 border-b border-base-6 flex flex-col items-start justify-center bg-gradient-to-br from-base-1 from-50% to-primary-3">
          <h1 className="text-5xl font-semibold font-workbench text-base-12 mb-1 flex justify-start gap-2 items-baseline">
            flowopt
            <div className="font-mono text-base-11 text-sm font-light">
              v{version}
            </div>
          </h1>
          <h3 className="text-base-11 mb-6 text-normal">
            The next-generation of MODFLOW hyperparameter optimization
          </h3>
          <Button variant={"primary"}>
            <span className="flex justify-between items-center gap-2">
              Get Started{" "}
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                // strokeWidth="2"
                size={16}
              />
            </span>
          </Button>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="p-8 flex-grow mt-auto">
            <h3 className="text-center text-lg font-semibold mb-8">
              Traditional Optimization
            </h3>
            <div className="relative border border-base-6 rounded-sm p-16 font-mono text-sm flex flex-col bg-base-2 text-base-11">
              <span className="absolute font-xs top-0 p-4 left-0 text-base-10">
                random-search-212.lst
              </span>
              <span>mass balance: 1.32456</span>
              <span>time elapsed: 8.43 hours</span>
            </div>
            <div className="text-base-11 mt-4">Time to optimize | 8 days</div>
          </div>
          <div className="p-8 flex-grow">
            <h3 className="font-workbench font-semibold text-center text-lg mb-8">
              flowopt
            </h3>
            <div className="relative border border-primary-6 rounded-sm p-16 font-mono text-sm flex flex-col bg-gradient-to-br from-primary-1 to-primary-2 text-primary-12">
              <span className="absolute font-xs top-0 p-4 left-0 text-primary-11">
                flowopt-experiment-1280.lst
              </span>
              <span>mass balance: 0.2938</span>
              <span>time elapsed: 2.12 hours</span>
            </div>
            <div className="text-primary-12 mt-4">
              Time to optimize | 8 hours
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
