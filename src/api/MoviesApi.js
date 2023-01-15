import axios from 'axios';
import _ from 'lodash';

export default ArticlesApi = {
    getPopularMovies: () => getPopularMovies(),
}

const getPopularMovies = async () => {
    let response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f8445d2b52a8a0305fa4e0138373419f&language=en-US&page=1');
    return response.data.results;
}