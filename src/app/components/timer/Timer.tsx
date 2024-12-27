"use client";

import { useState } from "react";
import { useTimer } from "./useTimer"

export const Timer = () => {
  const value = useTimer();
  const [now] = useState(Date.now());

  console.log("Took", now - value, "ms");
  return null;
}