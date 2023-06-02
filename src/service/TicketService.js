import axios from "axios";

export const findByIdSeat = async (list, idFilm, auth) => {
    const headers = {'Authorization': 'Bearer ' + auth};
    let string = list.join(",")
    try {
        const result = await axios.get(`http://localhost:8080/api/user/ticket/find-by-id?list=${string}&idFilm=${idFilm}`, {headers});
        return result.data;
    } catch (e) {
        console.log(e)
    }

}

export const checkDiscount = async (nameDiscount, auth) => {
    const headers = {'Authorization': 'Bearer ' + auth};
    try {
        const result = await axios.get(`http://localhost:8080/api/user/ticket/check-discount?nameDiscount=${nameDiscount}`, {headers})
        return result.data;
    } catch (e) {
        console.log(e)
    }

}
export const pay = async (ticketDTO, auth) => {
    const headers = {'Authorization': 'Bearer ' + auth};
    try {
        const result = await axios.post(`http://localhost:8080/api/user/ticket/pay`, ticketDTO, {headers})
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const getCustomer = async (nameAcc, auth) => {
    const headers = {'Authorization': 'Bearer ' + auth};
    try {
        const result = await axios.get(`http://localhost:8080/api/user/ticket/get-customer?username=${nameAcc}`, {headers})
        return result.data
    } catch (e) {
        console.log(e)
    }

}
export const cancelSeat = async (listId) => {
    try {
        await axios.put(`http://localhost:8080/api/public/seat/reset_status`, listId);
    } catch (e) {
        console.log(e)
    }
}