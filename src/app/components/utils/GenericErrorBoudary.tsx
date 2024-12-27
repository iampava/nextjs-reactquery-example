"use client";

import { ErrorBoundary } from "react-error-boundary";
import { GenericError } from "./GenericError";

export function GenericErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      {children}
    </ErrorBoundary>
  )
}

function Fallback({ error }: { error: unknown }) {
  return (
    <GenericError err={error} />
  );
}
