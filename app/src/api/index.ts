import axios from 'axios';
import { API_ENDPOINT } from '../utils/constants';

export const getTodos = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_ENDPOINT)
      .then((res) => resolve(res.data))
      .catch((err) => {
        console.log(err);
        resolve([]);
      });
  });
};

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

export const resolveTodo = (id: string, resolved: boolean) => {
  return new Promise((resolve, reject) => {
    const url = `${API_ENDPOINT}${id}`;

    axios
      .put(url, { resolve: resolved })
      .then(resolve)
      .catch((err) => {
        console.log(err);
        reject('Failed to resolve todo');
      });
  });
};

export const deleteTodo = (id: string) => {
  return new Promise((resolve, reject) => {
    const url = `${API_ENDPOINT}${id}`;

    axios
      .delete(url)
      .then(resolve)
      .catch((err) => {
        console.log(err);
        reject('Failed to delete todo');
      });
  });
};
