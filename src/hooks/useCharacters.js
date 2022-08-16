import {useEffect, useState} from "react";

const API_URL = "https://rickandmortyapi.com/api/character";

const getCharacters = async ({ids = []}) => {
    const url = `${API_URL}/${ids}`;
    return await fetch(url)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) return data;
            return data?.results ?? [data];
        })
        .catch(() => []);
};

const useCharacters = ({ids = []} = {}) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters({ids})
            .then(response => setCharacters(response));
    }, []);

    return [characters];
};

export default useCharacters;
