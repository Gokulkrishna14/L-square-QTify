import { fetchFilters } from "../../API/api";
import { Hero } from "../../components/Hero/Hero"
import {Section} from "../../components/Section/Section";
import { useOutletContext } from "react-router-dom";

export default function HomePage() {
    const {data} = useOutletContext();
    const {newAlbums, topAlbums, songs} = data;

    return (
        <div>
            <Hero />
            <Section title="Top Albums" data={topAlbums} type="album" />
            <Section title="New Albums" data={newAlbums} type="album" />
            <Section title="Songs" data={songs} type="song" fetchFilters={fetchFilters} />
        </div>
    );
}