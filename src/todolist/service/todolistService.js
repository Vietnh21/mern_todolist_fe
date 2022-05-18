import api from "./api";

const getListTodo = () => api.get(api.url.todolist).then((res) => res.data);

const getIdTodo = (id) =>
  api.get(`${api.url.todolist}/${id}`).then((res) => res.data);

const createTodo = (data) =>
  api.post(api.url.todolist, data).then((res) => res.data);

const updateTodo = (id, data) =>
  api.put(`${api.url.todolist}/${id}`, data).then((res) => res.data);

const deleteTodo = (id) =>
  api.delete(`${api.url.todolist}/${id}`).then((res) => res.data);

const todoService = {
  getListTodo,
  getIdTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
export default todoService;
