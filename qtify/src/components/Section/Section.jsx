import { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from '@mui/material';
import  CardSong  from "../Card/CardSong";
import  Carousel  from "../Carousel/Carousel";




export function Section({title, data, type}){
    const [collapseToggle, setCollapseToggle] = useState(false);  

    const handleToggle = () => {
        setCollapseToggle(!collapseToggle);
        console.log(data);
    }

    return (
        <div className={styles.section}>
            <div className={styles.heading}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>
                    {!collapseToggle ? "Show all" : "Collapse"}
                </h4>
            </div>
            {data.length ===0 ? (
                <CircularProgress />
            ) : (
                <div className={styles.cardWrapper}>
                    {!collapseToggle ? (
                        <Carousel data={data} />
                    ) : (
                        <div className={styles.grid}>
                            {data.map(cardEle => ( 
                                <CardSong key={cardEle.id} data={cardEle} type={type} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}