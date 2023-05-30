import axios from "axios";

export const listTypeFilm = async () => {
    try {
        const  result = await axios.get(`http://localhost:8080/typeFilm`)
        return result.data;
    }catch (e){
        console.log(e)
    }
}