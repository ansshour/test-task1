type Cards = {
    id: number;
    name: string;
    category: string;
    image: string;
}[];

export let cards: Cards = [
    { id: 0, name: "SOFA", category: "Design", image: "image/categories/1.png" },
    { id: 1, name: "KeyBoard", category: "Branding", image: "image/categories/2.png" },
    { id: 2, name: "Work Media", category: "Illustration", image: "image/categories/3.png" },
    { id: 3, name: "DDDone", category: "Motion", image: "image/categories/4.png" },
    { id: 4, name: "Abstract", category: "Design", image: "image/categories/5.png" },
    { id: 5, name: "HandP", category: "Branding", image: "image/categories/6.png" },
    { id: 6, name: "Architect", category: "Motion", image: "image/categories/7.png" },
    { id: 7, name: "CalC", category: "Design", image: "image/categories/8.png" },
    { id: 8, name: "Sport", category: "Branding", image: "image/categories/9.png" },
    { id: 9, name: "SOFA2", category: "Design", image: "image/categories/1.png" },
    { id: 10, name: "KeyBoard2", category: "Branding", image: "image/categories/2.png" },
    { id: 11, name: "Work Media2", category: "Illustration", image: "image/categories/3.png" },
    { id: 12, name: "DDDone2", category: "Motion", image: "image/categories/4.png" },
    { id: 13, name: "Abstract2", category: "Design", image: "image/categories/5.png" },
    { id: 14, name: "HandP2", category: "Branding", image: "image/categories/6.png" },
    { id: 15, name: "Architect2", category: "Motion", image: "image/categories/7.png" },
    { id: 16, name: "CalC2", category: "Design", image: "image/categories/8.png" },
    { id: 17, name: "Sport2", category: "Branding", image: "image/categories/9.png" },
    { id: 18, name: "Abstract3", category: "Design", image: "image/categories/5.png" },
    { id: 19, name: "Abstract4", category: "Design", image: "image/categories/5.png" },
    { id: 20, name: "Abstract5", category: "Design", image: "image/categories/5.png" },
    { id: 21, name: "Abstract6", category: "Design", image: "image/categories/5.png" },
    { id: 22, name: "Abstract7", category: "Design", image: "image/categories/5.png" },
    { id: 23, name: "Abstract8", category: "Design", image: "image/categories/5.png" },
    { id: 24, name: "Abstract9", category: "Design", image: "image/categories/5.png" },
]

export const deleteCard = (id: number | null) => {
    cards = cards.filter(card => card.id !== id);
}