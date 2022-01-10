import { TodoModel } from './TodoSchema';

export const getAllTodos = () => {
  return new Promise((resolve, reject) => {
    TodoModel.find()
      .then((todos) => {
        resolve(todos?.reverse());
      })
      .catch(() => reject('Failed to fetch todo'));
  });
};

export const createTodo = (todo: string) => {
  return new Promise((resolve, reject) => {
    TodoModel.create({ todo })
      .then(resolve)
      .catch(() => reject('Failed to create todo'));
  });
};

export const resolveTodo = (todoId: string, resolved: boolean) => {
  return new Promise(async (resolve, reject) => {
    TodoModel.findByIdAndUpdate(todoId, { resolved })
      .then(resolve)
      .catch(() => reject('Failed to resolve todo'));
  });
};

export const deleteTodo = (todoId: string) => {
  return new Promise(async (resolve, reject) => {
    TodoModel.findByIdAndDelete(todoId)
      .then(resolve)
      .catch(() => reject('Failed to delete todo'));
  });
};
