<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-success">
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="#" @click="changeView('Home')"
        >toDoApp</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <a
            class="nav-link text-light"
            aria-current="page"
            href="#"
            @click="changeView('Login')"
            >Login</a
          >
          <a class="nav-link text-light" href="#" @click="changeView('Signup')"
            >Signup</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Home",
  methods: {
    async changeView(routeName) {
      await this.$router.push({
        name: routeName,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

