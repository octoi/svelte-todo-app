import { Router } from 'express';
import {
  getAllTodos,
  createTodo,
  resolveTodo,
  deleteTodo,
} from '../mongo/helpers';

export const router = Router();

router.get('/', (req, res) => {
  getAllTodos()
    .then((data) => res.json(data).status(200))
    .catch((err) => res.send(err).status(404));
});

router.post('/', (req, res) => {
  const todo = req.body?.todo;

  if (!todo) {
    res.send('required field not found').status(400);
    return;
  }

  createTodo(todo)
    .then((data) => res.json(data).status(200))
    .catch((err) => res.send(err).status(404));
});

router.put('/:id', (req, res) => {
  const todoId = req.params.id;
  const resolve = req.body?.resolve;

  if (!todoId || !resolve) {
    res.send('required field not found').status(400);
    return;
  }

  resolveTodo(todoId, resolve)
    .then((data) => res.json(data).status(200))
    .catch((err) => res.send(err).status(404));
});

router.delete('/:id', (req, res) => {
  const todoId = req.params.id;

  if (!todoId) {
    res.send('required field not found').status(400);
    return;
  }

  deleteTodo(todoId)
    .then((data) => res.json(data).status(200))
    .catch((err) => res.send(err).status(404));
});
