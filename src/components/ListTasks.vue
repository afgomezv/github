<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Estado</th>
        <th scope="col">Titulo</th>
        <th scope="col">Descripción</th>
        <th scope="col">Categorias</th>
        <th scope="col">Accion</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tasks" :key="item.id">
        <th>
          <input type="checkbox" @click="stateDone(item.id)" />
        </th>
        <td>{{ item.title }}</td>
        <td>{{ item.description }}</td>
        <td>
          <span v-for="(tag, index) in item.tags" :key="index">
            {{ tag }}
            <!-- {{ item.tags.length === index + 1 ? tag : tag +", ",}} -->
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="deleteTasks(item.id)">
            Eliminar
          </button>
          <router-link
            class="btn btn-warning ms-2 btn-sm"
            :to="{ name: 'Editar', params: { id: item.id } }"
            >Editar</router-link
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    ...mapActions(["deleteTasks"]),
  },
};
</script>

