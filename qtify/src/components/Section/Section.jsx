import { useState, useEffect } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from '@mui/material';
import  Carousel  from "../Carousel/Carousel";
import CardSong  from "../Card/CardSong";
import Filter from "../Filter/Filter"




export function Section({title, data, type, fetchFilters}){
    const [collapseToggle, setCollapseToggle] = useState(false); 
    
    const [filters, setFilters] = useState([{key: "all", label : "All"}]);

    const [selectedSong, setSelectedSong] = useState(0);

    const handleToggle = () => {
        setCollapseToggle(!collapseToggle);
        console.log(data);
    }

    useEffect(() => {
        if(fetchFilters){
            fetchFilters().then((response) => {
                const {data} = response;
                setFilters([...filters, ...data]);
            });
        }
    }, []);

    const showFilters = filters.length > 1;
    const cardsToRender = data.filter((card) => 
        showFilters && selectedSong!==0 
        ? card.genre.key === filters[selectedSong].key 
        : card 
    )
    
    

    return (
            <div className={styles.section}>
                <div className={styles.heading}>
                    <h3>{title}</h3>
                    {type !== "song" && (
                    <h4 className={styles.toggleText} onClick={handleToggle}>
                        {!collapseToggle ? "Show all" : "Collapse"}
                    </h4>
                )}
                </div>
                {showFilters && (
                <Filter filters={filters} selectedFilter={selectedSong} setSelectedFilter={setSelectedSong} />
                )}
                {cardsToRender && cardsToRender.length === 0 ? (
                    <CircularProgress />
                ) : (
                    <div className={styles.cardWrapper}>
                        {!collapseToggle ? (
                            <Carousel data={cardsToRender} type={type} />
                        ) : (
                            <div className={styles.grid}>
                                {cardsToRender.map(cardEle => {
                                    return <CardSong type={type} data={cardEle} key={cardEle.id} />
                                })}
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    

    
}