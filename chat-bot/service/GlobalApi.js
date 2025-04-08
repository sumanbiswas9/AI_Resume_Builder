import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL + "/api/",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
});

const CreateNewChat = (data) => axiosClient.post('chat-bots', data);

const GetUserChats = (userEmail) => axiosClient.get('chat-bots?filters[email][$eq]=' + userEmail + "&sort=createdAt:desc");

const UpdateChatDetail = (id, data) => axiosClient.put(`chat-bots/${id}`, data);

const GetChatById = (id) => axiosClient.get(`chat-bots/${id}?populate=*`);

const DeleteChatById = (id) => axiosClient.delete(`chat-bots/${id}`);

export default {
    CreateNewChat,
    GetUserChats,
    UpdateChatDetail,
    GetChatById,
    DeleteChatById
};
