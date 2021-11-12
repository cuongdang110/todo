import { ITodo } from "../../../interfaces";
import { axiosClient } from ".";

export const todoAPI = {
  getAll() {
    const url = `/todos`;
    return axiosClient.get(url);
  },
  get(id: number) {
    const url = `todos/${id}`;
    return axiosClient.get(url);
  },
  add(todo: ITodo) {
    const url = `/todos`;
    return axiosClient.post(url, todo);
  },
  remove(id: string | number) {
    const url = `/todos/${id}`;
    return axiosClient.delete(url);
  },
  update(id: any, data : any) {
    const url = `todos/${id}`;
    return axiosClient.patch(url, data)
  }
};
export const getTodos = async () => {
  try {
    const { data } = await todoAPI.getAll();
    return Promise.resolve(data);
  } catch (err) {
    console.log(err);
  }
};
export const addTodos = (item: ITodo) => {
  return todoAPI.add(item);
};
