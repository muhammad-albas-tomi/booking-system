import { create } from 'zustand';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ModalState {
  opened: boolean;
  open: () => void;
  close: () => void;
}

export const useNavbarCloser = create<ModalState>()((set) => ({
  opened: false,
  open: () => set({ opened: true }),
  close: () => set({ opened: false }),
}));
