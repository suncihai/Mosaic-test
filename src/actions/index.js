import axios from 'axios';

const API_KEY = '24b58a6e9e9f49b2b7237845f0cb6e64'

export const FETCH_NEWS = 'FETCH_NEWS';

//fetch news api call
export function fetchNews(news){
	const url = `http://newsapi.org/v2/everything?q=${news}&from=2020-02-11&sortBy=publishedAt&apiKey=${API_KEY}`;
	const request = axios.get(url);

	console.log("request:",request);
	return {
	   type:FETCH_NEWS,
	   payload:request
	};
}