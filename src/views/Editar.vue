<template>
  <form @submit.prevent="updateTask(task)">
    <AddToDo :task="task" />
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AddToDo from "../components/AddToDo.vue";
export default {
  name: "Editar",
  components: {
    AddToDo,
  },
  computed: {
    ...mapState(["task"]),
  },
  methods: {
    ...mapActions(["setTask", "updateTask"]),
  },
  created() {
    this.setTask(this.$route.params.id);
  },
};
</script>

<style scoped lang='scss'>
form {
  width: 60%;
  margin: 0 auto;
}
</style>

