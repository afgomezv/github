import { createStore } from "vuex";
import router from "@/router";

export default createStore({
  state: {
    tasks: [],
    task: {
      id: "",
      title: "",
      description: "",
      tags: [],
      done: false,
    },
  },
  getters: {},
  mutations: {
    load(state, payload) {
      state.tasks = payload;
    },
    set(state, payload) {
      state.tasks.push(payload);
      localStorage.setItem("thereTasks", JSON.stringify(state.tasks));
    },
    delete(state, payload) {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
      localStorage.setItem("thereTasks", JSON.stringify(state.tasks));
    },
    task(state, payload) {
      if (!state.tasks.find((item) => item.id === payload)) {
        router.push("/todo");
        return;
      }
      state.task = state.tasks.find((item) => item.id === payload);
    },
    update(state, payload) {
      state.tasks = state.tasks.map((item) =>
        item.id === payload.id ? payload : item
      );
      router.push("/todo");
      localStorage.setItem("thereTasks", JSON.stringify(state.tasks));
    },
    stateDone(state, payload) {
      if ((state.tasks = state.tasks.find((item) => item.id === payload))) {
        state.task.done = !state.task.done;
      }
    },
  },
  actions: {
    loadLocalStorage({ commit }) {
      if (localStorage.getItem("thereTasks")) {
        const tasks = JSON.parse(localStorage.getItem("thereTasks"));
        commit("load", tasks);
        return;
      }

      localStorage.setItem("thereTasks", JSON.stringify([]));
    },
    setTasks({ commit }, task) {
      commit("set", task);
    },
    deleteTasks({ commit }, id) {
      commit("delete", id);
    },
    setTask({ commit }, id) {
      commit("task", id);
    },
    updateTask({ commit }, task) {
      commit("update", task);
    },
    stateTask({ commit }, id) {
      commit("stateDone", id);
    },
  },
  modules: {},
});
