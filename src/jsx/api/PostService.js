import axios from 'axios';
import { LIMIT } from './constants';
import { BASE_URL_POST } from './constants';

export default class PostService {
  static async getAll() {
    const response = await axios.get(BASE_URL_POST);
    if (response) {
      return response.data;
    }
  }

  static async getResponce(page) {
    const response = await axios.get(BASE_URL_POST, {
      params: { _limit: LIMIT, _page: page },
    });
    if (response) {
      return response;
    }
  }

  static async getPostById(id) {
    const response = await axios.get(BASE_URL_POST + `/${id}`);
    if (response) {
      return response;
    }
  }
  static async getCommentsById(id) {
    const response = await axios.get(BASE_URL_POST + `/${id}/comments`);
    if (response) {
      return response;
    }
  }
}
