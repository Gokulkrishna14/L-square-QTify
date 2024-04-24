import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./Navbar.module.css"


export function Navbar(){
    return (
        <div className={styles.navbar}>
            <Logo />
            <SearchBar placeholder={"search"} />
            <Button>Give Feedback</Button>
        </div>     
    );
    
}
