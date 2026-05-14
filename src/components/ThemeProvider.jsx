"use client";

import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={`${isDark ? "dark" : ""} min-h-screen bg-base text-base`}>
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-primary-light-glow blur-3xl" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-primary-glow blur-3xl" />
        </div>
        <div className="relative min-h-screen">{children}</div>
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme باید داخل ThemeProvider استفاده شود.");
  }
  return context;
}
