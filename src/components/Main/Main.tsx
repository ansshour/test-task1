import styles from "./Main.module.css";
import { Container } from "../Container/Container";
import { Card } from "../Card/Card";
import { useState } from "react";
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
    const [lastCardId, setlastCardId] = useState(9);
    const [listOpen, setListOpen] = useState(false);

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
        setListOpen(false);
    }

    return (
        <div className={styles.outerContainer}>
            <Container>
                <ul className={styles.categories}>
                    {categories.map(({ id, name }) => <li className={name === activeCategory ? `${styles.category} ${styles.active}` : `${styles.category}`} key={id} onClick={() => { filterCards(name) }}>{name}</li>)}
                </ul>
                <div className={styles.categoriesMobile}>
                    <div className={styles.pulloutList}>
                        <div className={`${styles.activeItem} ${styles.item}`} onClick={() => { setListOpen(!listOpen) }}><p>{activeCategory}</p><span className={listOpen ? `${styles.arrow} ${styles.rotate}` : `${styles.arrow}`}></span></div>
                        <div className={listOpen ? `${styles.items} ${styles.open}` : `${styles.items}`}>
                            {categories.map(({ name, id }) => (activeCategory !== name ? <div className={styles.item} key={id} onClick={() => { filterCards(name) }}>{name}</div> : ""))}
                        </div>
                    </div>
                </div>

                <div className={styles.cards}>
                    {cardData.map(({ id, name, category, image }, i) => (i < lastCardId ? <Card name={name} category={category} image={image} key={id} onClick={setSelectCard} selectCard={selectCard} id={id} filterCards={filterCards} /> : ""))}
                </div>
                <div className={styles.loadMoreBtnBlock}><a className={styles.loadMoreBtn} onClick={() => { setlastCardId(lastCardId + 9) }}><p>Load More</p></a></div>
            </Container>
        </div>
    )
}