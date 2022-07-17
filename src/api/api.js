import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://live.vamoos.com/api/itineraries/VMD-VL1234',
});


export const vamoosAPI = {
    getData() {
        return instance.get(`/`)
            .then(response => {
                return response.data;
            });
    },
}

