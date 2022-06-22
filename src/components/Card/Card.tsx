import styles from "./Card.module.css";

type Props = {
    category: string;
    name: string;
    image: string;
    id: number;
    onClick: (arg: null | number) => void;
    selectCard: null | number;
}

export const Card: React.FC<Props> = ({ category, name, image, onClick, id, selectCard }) => {

    const selectCardHundler = () => {
        if (selectCard === id) {
            onClick(null)
        } else {
            onClick(id);
        }

    }

    return (
        <div className={selectCard === id ? `${styles.container} ${styles.selected}` : `${styles.container}`} style={{ backgroundImage: `url(${image})` }} onClick={selectCardHundler}>
            <div className={styles.cetegoryOuter}><p className={styles.category}><p>{category}</p></p></div>
            <p className={styles.name}>{name}</p>
        </div>
    )
}