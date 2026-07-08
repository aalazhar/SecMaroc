import { create } from "zustand";

interface DevisModalState {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useDevisModal = create<DevisModalState>((set) => ({
  open: false,

  openModal: () => set({ open: true }),
  closeModal: () => set({ open: false }),
}));