"use client";

import { createContext, useContext, useState } from "react";

const TimerContext = createContext<number>(0);

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
    const [now] = useState(Date.now());
    return (
        <TimerContext.Provider value={now}>
            {children}
        </TimerContext.Provider>
    )
};

export const useTimer = () => {
    return useContext(TimerContext);
}
