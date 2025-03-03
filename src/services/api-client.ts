import axios from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "10bb6bbbc3e345c28e086323fd8a40f6"
  }
})