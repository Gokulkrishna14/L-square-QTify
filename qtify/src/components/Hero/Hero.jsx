import heroImage from "../../assets/hero_headphones.png";
import styles from "./Hero.module.css";

export function Hero(){
    return (
        <div styles={styles.hero}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <p>100 Thousand Songs, ad-free</p>
                    <p>Over thousands podcast episodes</p>
                </div>
                <img src={heroImage} alt="heroImage" width={"212px"} height={"212px"} />
            </div>
        </div>
    )
}