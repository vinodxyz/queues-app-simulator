import { RouterProvider } from "react-router";
import { router } from "./routes";
import { SimulatorProvider } from "./hooks/useSimulator";
import { SimulatorPanel } from "./components/SimulatorPanel";
import { DemoNarrator } from "./components/DemoNarrator";

/** Root application shell - iPhone 16 frame + simulator panel */
export default function App() {
  return (
    <SimulatorProvider>
      <div className="flex items-center justify-center w-full min-h-dvh bg-[#f0f0f0]">
        <div className="flex items-start gap-[24px]">
          {/* Phone column: iPhone frame + narrator subtitle below */}
          <div className="flex flex-col items-center shrink-0">
            {/* iPhone 16 frame */}
            <div
              className="relative overflow-hidden bg-background shrink-0"
              style={{
                width: 393,
                height: 852,
                borderRadius: 56,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <RouterProvider router={router} />
            </div>

            {/* Demo narrator - movie-subtitle style, below phone */}
            <DemoNarrator />
          </div>

          {/* Simulator panel - outside the phone, to the right */}
          <div className="pt-[40px]">
            <SimulatorPanel />
          </div>
        </div>
      </div>
    </SimulatorProvider>
  );
}
