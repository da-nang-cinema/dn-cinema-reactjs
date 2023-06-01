import axios from "axios";


export const apiGetAllFilms = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/movie/list`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const findFilmById = async (idFilm) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/movie/${idFilm}}`)
        return result.data
    }catch (e){
        console.log(e)
    }
}
export const updateFilm = async (film) => {
    try {
        await axios.put(`http://localhost:8080/api/public/movie/${film.idFilm}}`, {...film})
    }catch (e){
        console.log(e)
    }
}
export const createFilm = async (film) => {
    try {
        await axios.post(`http://localhost:8080/api/public/movie`, {...film})
    }catch (e){
        console.log(e)
    }
}

