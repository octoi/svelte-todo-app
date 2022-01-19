import { writable } from 'svelte/store';
import type { TodoType } from '../utils/types';

export const todoStore = writable<TodoType[]>([]);
