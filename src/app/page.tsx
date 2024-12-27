import { Suspense } from "react";
import Home from "./components/Home";

export default function HomePage() {
  return (
    <div>
      <p> Home Page </p>
      <Suspense fallback={<p> Page Fallback</p>}>
      <Home />
      </Suspense>
    </div>
  );
}

export const dynamic = "force-dynamic";
