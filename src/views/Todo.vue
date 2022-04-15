<template>
  <form @submit.prevent="handleSubmit">
    <AddToDo :task="task" />
  </form>
  <hr />
  <ListTasks />
</template>

<script>
import AddToDo from "../components/AddToDo.vue";
import ListTasks from "../components/ListTasks.vue";
import { mapActions } from "vuex";
const shortid = require("shortid");

export default {
  name: "Todo",
  components: {
    AddToDo,
    ListTasks,
  },

  data() {
    return {
      task: {
        id: "",
        title: "",
        description: "",
        tags: [],
        done: false,
      },
    };
  },

  methods: {
    ...mapActions(["setTasks"]),
    handleSubmit() {
      // generar id
      this.task.id = shortid.generate();

      // envia los datos
      this.setTasks(this.task);

      this.task = {
        id: "",
        title: "",
        description: "",
        tags: [],
        done: false,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 60%;
  margin: 0 auto;
}
</style>
