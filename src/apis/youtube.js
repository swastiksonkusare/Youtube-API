import axios from 'axios'

const KEY = 'AIzaSyA_QxaJJDto7X902czBG18HfM2CztGgkIU';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
}); 

