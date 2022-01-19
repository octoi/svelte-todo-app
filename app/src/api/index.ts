import axios from 'axios';
import { API_ENDPOINT } from '../utils/constants';

export const newTodo = (todo: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_ENDPOINT, { todo })
      .then((res) => {
        if (res.status !== 200) {
          reject('Failed to create new todo');
          return;
        }

        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject('Failed to create new todo');
      });
  });
};
