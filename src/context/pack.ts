import { create } from "zustand";

interface PackItem {
    title: string;
    description: string;
    price: string;
    promo: boolean;
}
interface OrnementItem {
    title: string;
    color: string;
}
interface FinitionItem {
    title: string;
    color: string;
}

type PackStoreType = {
    content: PackItem[];
    ornements: OrnementItem[];
    finitions: FinitionItem[];

    selection: number;
    ornement: number;
    finition: number;

    setFinition: (finition: number) => void;
    setOrnement: (ornement: number) => void;
    setSelection: (selection: number) => void;
};

export const useCartStore = create<PackStoreType>((set) => ({
    content: [
        { title: "Pack Starter", description: "3 saveurs de découverte", price: "Offert", promo: false },
        { title: "Pack Suçoteur", description: "6 saveurs", price: "29,00 €", promo: false },
        { title: "Pack Suçoteur Pro", description: "12 saveurs + 1 jus de Mynthos", price: "49,00 €", promo: true },
    ],
    ornements: [
        {
            title: "Diamand",
            color: "bg-[#017AD7]",
        },
        {
            title: "Obsidienne",
            color: "bg-[#2C3C3A]",
        },
        {
            title: "Emeraude",
            color: "bg-[#35E1C2]",
        },
        {
            title: "Topaze",
            color: "bg-[#FF5EAB]",
        },
    ],
    finitions: [
        { title: "Bronze", color: "bg-[#EECDBF]" },
        { title: "Argent", color: "bg-[#BFC7EE]" },
        { title: "Or", color: "bg-[#D8D8D8]" },
        { title: "Gris", color: "bg-[#484848]" },
    ],

    selection: 0,
    ornement: 0,
    finition: 0,

    setFinition: (finition) => set({ finition }),
    setOrnement: (ornement) => set({ ornement }),
    setSelection: (selection) => set({ selection }),
}));
