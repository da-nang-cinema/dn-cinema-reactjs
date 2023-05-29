import axios from "axios";

export const findAllTicketBooking = async () => {
    try {
        return await axios.get('http://localhost:8080/api/user');
    } catch (error) {
        console.log(error)
    }
}
export const findAllTicketBookingPoint = async () => {
    try {
        return axios.get('http://localhost:8080/api/user/history');
    } catch (error) {
        console.log(error)
    }
}
export const deleteTicket = async (id) => {
    try {
        await axios.delete("http://localhost:8080/api/user/delete-ticket/" + id);
    } catch (error) {
        console.log(error)
    }
}