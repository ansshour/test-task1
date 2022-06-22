import styles from "./Main.module.css";
import { Container } from "../Container/Container";
import { Card } from "../Card/Card";
import { useState, useEffect } from "react";
import { cards } from "./CardsData"

type CateoryList = {
    id: number;
    name: string;
}[];

const categories: CateoryList = [
    { id: 0, name: "Show All" },
    { id: 1, name: "Design" },
    { id: 2, name: "Branding" },
    { id: 3, name: "Illustration" },
    { id: 4, name: "Motion" },
]

export const Main = () => {

    const [selectCard, setSelectCard] = useState<number | null>(null);
    const [cardData, setCardData] = useState(cards);
    const [activeCategory, setActiveCategory] = useState<string>("Show All");
    const [lastCardId, setlastCardId] = useState<number>(9);

    const filterCards = (currentCategory: string) => {
        let filtredCards = cards;
        filtredCards = cards.filter(({ category }) => {
            if ((category === currentCategory) || (currentCategory === "Show All")) {
                return true
            }
        })
        setActiveCategory(currentCategory);
        setCardData(filtredCards);
        setlastCardId(9);
    }

    return (
        <div className={styles.outerContainer}>
            <Container>
                <ul className={styles.categories}>
                    {categories.map(({ id, name }) => <li className={name === activeCategory ? `${styles.category} ${styles.active}` : `${styles.category}`} key={id} onClick={() => { filterCards(name) }}>{name}</li>)}
                </ul>

                <div className={styles.cards}>
                    {cardData.map(({ id, name, category, image }) => (id < lastCardId ? <Card name={name} category={category} image={image} key={id} onClick={setSelectCard} selectCard={selectCard} id={id} filterCards={filterCards} /> : ""))}
                </div>
                <div className={styles.loadMoreBtnBlock}><a className={styles.loadMoreBtn} onClick={() => { setlastCardId(lastCardId + 9) }}><p>Load More</p></a></div>
            </Container>
        </div>
    )
}