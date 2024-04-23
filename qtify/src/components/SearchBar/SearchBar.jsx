import SearchIcon from '@mui/icons-material/Search';
import styles from "./SearchBar.module.css";
import { InputAdornment, TextField } from '@mui/material';

export default function SearchBar({placeholder}){

    return(
        <TextField
            className={styles.searchBox}
            placeholder={placeholder}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    )
    
}