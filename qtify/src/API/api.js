import axios from 'axios';

const backEndPoint = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
    try {
        const response = await axios.get(`${backEndPoint}/albums/top`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const fetchNewAlbums = async () => {
    try {
        const response = await axios.get(`${backEndPoint}/albums/new`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const fetchNewSongs = async () => {
    try {
        const response = await axios.get(`${backEndPoint}/songs`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};


export const fetchFilters = async () => {
    try {
        const response = await axios.get(`${backEndPoint}/genres`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
