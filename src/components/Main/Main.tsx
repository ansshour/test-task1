import styles from "./Main.module.css";
import { Container } from "../Container/Container";
import { Card } from "../Card/Card";
import { useState } from "react";

type Category = "Show All" | "Design" | "Branding" | "Illustration" | "Motion";
type CateoryList = {
    id: number;
    name: Category;
}[];

const categories: CateoryList = [
    { id: 0, name: "Show All" },
    { id: 1, name: "Design" },
    { id: 2, name: "Branding" },
    { id: 3, name: "Illustration" },
    { id: 4, name: "Motion" },
]

const cards = [
    { id: 0, name: "SOFA", category: "Design", image: "image/categories/1.png" },
    { id: 1, name: "KeyBoard", category: "Branding", image: "image/categories/2.png" },
    { id: 2, name: "Work Media", category: "Illustration", image: "image/categories/3.png" },
    { id: 3, name: "DDDone", category: "Motion", image: "image/categories/4.png" },
    { id: 4, name: "Abstract", category: "Design", image: "image/categories/5.png" },
    { id: 5, name: "HandP", category: "Branding", image: "image/categories/6.png" },
    { id: 6, name: "Architect", category: "Motion", image: "image/categories/7.png" },
    { id: 7, name: "CalC", category: "Design", image: "image/categories/8.png" },
    { id: 8, name: "Sport", category: "Branding", image: "image/categories/9.png" },
]

export const Main = () => {

    const [selectCard, setSelectCard] = useState<number | null>(null);
    const [cardData, setCardData] = useState(cards);

    const filterCards = (currentCategory: Category) => {
        let filtredCards = cards;
        filtredCards = cards.filter(({ category }) => {
            if ((category === currentCategory) || (currentCategory === "Show All")) {
                return true
            }
        })
        setCardData(filtredCards);
    }

    return (
        <div className={styles.outerContainer}>
            <Container>
                <ul className={styles.categories}>
                    {categories.map(({ id, name }) => <li className={styles.category} key={id} onClick={() => { filterCards(name) }}>{name}</li>)}
                </ul>

                <div className={styles.cards}>
                    {cardData.map(({ id, name, category, image }) => <Card name={name} category={category} image={image} key={id} onClick={setSelectCard} selectCard={selectCard} id={id} />)}
                </div>
                <div className={styles.loadMoreBtnBlock}><a className={styles.loadMoreBtn}><p>Load More</p></a></div>
            </Container>
        </div>
    )
}