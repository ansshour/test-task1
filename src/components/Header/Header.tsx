import { Container } from "../Container/Container";
import styles from "./Header.module.css";

const menuItems = [
    { id: 0, name: "About", link: "#" },
    { id: 1, name: "Services", link: "#" },
    { id: 2, name: "Pricing", link: "#" },
    { id: 3, name: "Blog", link: "#" },
];

export const Header = () => {
    return (
        <div className={styles.containerOuter}>
            <Container>
                <div className={styles.headerTop}>
                    <div className={styles.logoBlock}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="139.825" height="43.416" viewBox="0 0 139.825 43.416">
                            <g id="logo" transform="translate(-1.175)">
                                <text id="Agency" transform="translate(62 32)" fill="#fff" fontSize="24" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="0">Agency</tspan></text>
                                <g id="Polygon" fill="none" strokeMiterlimit="10">
                                    <path d="M24,0,46.825,16.584,38.107,43.416H9.893L1.175,16.584Z" stroke="none" />
                                    <path d="M 23.99999809265137 6.180351257324219 L 7.052497863769531 18.49341773986816 L 13.5258674621582 38.41640472412109 L 34.47411346435547 38.41640472412109 L 40.94748306274414 18.49341583251953 L 23.99999809265137 6.180351257324219 M 24 3.814697265625e-06 L 46.82534408569336 16.58358573913574 L 38.10683441162109 43.41640472412109 L 9.893146514892578 43.41640472412109 L 1.174636840820312 16.58358573913574 L 24 3.814697265625e-06 Z" stroke="none" fill="#ef6d58" />
                                </g>
                                <path id="Polygon-2" data-name="Polygon" d="M9.5,0l9.035,6.564L15.084,17.186H3.916L.465,6.564Z" transform="translate(14 14)" fill="#ef6d58" />
                            </g>
                        </svg>
                    </div>
                    <div className={styles.nav}>
                        <nav>
                            <ul className={styles.links}>
                                {menuItems.map(({ link, name, id }) => <a href={link} key={id}>{name}</a>)}
                            </ul>
                        </nav>
                    </div>
                    <a className={styles.btn}><p>contact</p></a>
                </div>
                <div className={styles.headerBottom}>
                    <h1 className={styles.title}>Portfolio</h1>
                    <p className={styles.desc}>Agency provides a full service range including technical skills, design, business understanding.</p>
                </div>
            </Container>
        </div>
    )
}