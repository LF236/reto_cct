import axios from 'axios';
const taskApi = axios.create({
    baseURL: `${ process.env.REACT_APP_URL_API_TASK }`,
});

export default taskApi;