import { create } from "zustand";

type DialogeState = {
    dialogIsVisible: boolean;
    text: string;
};

type DialogActions = {
    showDialog: (text: string) => void;
    removeDialog: () => void;
};

type DialogStore = DialogeState & DialogActions;

const useDialogStore = create<DialogStore>((set) => ({
    dialogIsVisible: false,
    text: "",

    showDialog: (text) => set(() => ({ dialogIsVisible: true, text })),
    removeDialog: () => set(() => ({ dialogIsVisible: false })),
}));

export { useDialogStore };
