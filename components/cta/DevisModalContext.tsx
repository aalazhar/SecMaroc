"use client";

import { createContext, useContext, useState } from "react";

type ContextType = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const DevisModalContext = createContext<ContextType | null>(null);

export function DevisModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <DevisModalContext.Provider
      value={{
        open,
        openModal: () => setOpen(true),
        closeModal: () => setOpen(false),
      }}
    >
      {children}
    </DevisModalContext.Provider>
  );
}

export function useDevisModal() {
  const ctx = useContext(DevisModalContext);

  if (!ctx) {
    throw new Error("useDevisModal must be used inside DevisModalProvider");
  }

  return ctx;
}