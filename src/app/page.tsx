import { Suspense } from "react";
import { Home } from "./components/Home";

export default function HomePage() {
  return (
    <Suspense fallback={<p> loading </p>}>
      <Home />
    </Suspense>
  );
}
