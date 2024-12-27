import { Suspense } from "react";
import Home from "./components/Home";
import { TimerProvider } from "./components/timer/useTimer";

export default function HomePage() {
  return (
    <div>
      <p> Home Page </p>
      <TimerProvider>
        <Suspense fallback={<p> Page Fallback</p>}>
          <Home />
        </Suspense>
      </TimerProvider>
    </div>
  );
}

export const dynamic = "force-dynamic";
