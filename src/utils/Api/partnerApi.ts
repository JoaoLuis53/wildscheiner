import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:5000'
});

export const api = {
    getPartners: async () => {
        const req = await http('/partners');
        return req.data;
    },
    postPartners: async (id: number, name: string, surname: string, email: string, password: string, motorbike: string, avatar: string, description: string, photo: string) => {
        const req = await http.post('partners', {
            id, name, surname, email, password, motorbike, avatar, description, photo
        })
    }
}