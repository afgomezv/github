<template>
  <input
    type="text"
    class="form-control my-2 mt-5"
    placeholder="Ingrese Tarea"
    v-model.trim="task.title"
  />
  <input
    type="text"
    class="form-control my-2"
    placeholder="Ingrese description"
    v-model.trim="task.description"
  />
  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      id="check-1"
      class="form-check-input"
      v-model="task.tags"
      value="trabajo"
    />
    <label for="check-1" class="form-check-label">Trabajo</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      id="check-2"
      class="form-check-input"
      v-model="task.tags"
      value="estudio"
    />
    <label for="check-2" class="form-check-label">Estudio</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      id="check-3"
      class="form-check-input"
      v-model="task.tags"
      value="hogar"
    />
    <label for="check-3" class="form-check-label">Hogar</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      id="check-4"
      class="form-check-input"
      v-model="task.tags"
      value="personal"
    />
    <label for="check-4" class="form-check-label">Personal</label>
  </div>
  <div class="d-grid col-5 mx-auto">
    <button type="submit" class="btn btn-success mt-4" :disabled="btnDisabled">
      Agregar
    </button>
  </div>
</template>

<script>
export default {
  name: "AddToDo",
  props: {
    task: Object,
  },
  computed: {
    btnDisabled() {
      return this.task.title.trim() === "" ||
        this.task.description.trim() === "" ||
        this.task.tags.length === 0
        ? true
        : false;
    },
  },
};
</script>

<style>
</style>