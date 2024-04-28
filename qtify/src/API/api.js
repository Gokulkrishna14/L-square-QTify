import axios from 'axios';


export const generateSongs = async (url) => {
    try {
        const response = await axios.get(url);
        console.log(response.data.length);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export const generateTopAlbums = async (url) => {
    try {
        const response = await axios.get(url);
        console.log(response.data.length);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}