import { generateSongs,  } from "../../API/api"
import { useEffect, useState } from "react";
import { Hero } from "../../components/Hero/Hero"
import {Section} from "../../components/Section/Section";

export function HomePage() {
    const [topAlbums , setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            const response = await generateSongs("https://qtify-backend-labs.crio.do/albums/top");
            setTopAlbums(response); 
            console.log(topAlbums);
        };
        const fetchDataTop = async () => {
            const response = await generateSongs("https://qtify-backend-labs.crio.do/albums/new");
            setNewAlbums(response); 
            console.log(topAlbums);
        };
        fetchData();
        fetchDataTop();
    }, []);

    return (
        <div>
            <Hero />
            <Section title="Top Albums" data={topAlbums} type="album"  />
            <Section title="New Albums" data={newAlbums} type="album"  />
        </div>
    );
}