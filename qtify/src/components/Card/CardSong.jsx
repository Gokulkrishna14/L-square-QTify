import React from 'react';
import { Chip, Typography , Tooltip } from '@mui/material';
import styles from "./CardSong.module.css";

const CardSong = ({ data }) => {
    return (
        <Tooltip title={`${data.songs.length} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <img src={data.image} className={styles.image} alt={data.title} />
                    <div className={styles.chipCard}>
                        <Chip label={`${data.follows} follows`} variant="outlined" className={styles.chip} />
                    </div>
                </div>
                <Typography variant="body1" className={styles.textHeading}>
                    {data.title}
                </Typography>
            </div>
        </Tooltip>
    );
};

export default CardSong;
