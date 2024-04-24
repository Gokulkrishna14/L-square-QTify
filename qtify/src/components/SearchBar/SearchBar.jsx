import SearchIcon from '@mui/icons-material/Search';
import styles from "./SearchBar.module.css";

export default function SearchBar({placeholder}){

    return(
        <div className={styles.searchBox}>
            <div className={styles.searchText}>
                <input type="text" placeholder={placeholder}  />
            </div>
            <div className={styles.searchIcon}>
                <SearchIcon  />
            </div>
            
        </div>
        
    )
    
}