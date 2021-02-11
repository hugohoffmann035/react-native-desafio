import Axios from 'axios';

export default Axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=28657bf',
});
