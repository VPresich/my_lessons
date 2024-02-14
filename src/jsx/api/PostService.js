import axios from 'axios';
import { BASE_URL_POST } from './constants';

export default class PostService {
  static async getAll() {
    try {
      const response = await axios(BASE_URL_POST);
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}