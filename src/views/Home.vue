<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col container__text">
        <h2>Saber escoger el tiempo es ahorrar tiempo.</h2>
        <p>Se vas productivo</p>
        <button
          type="button"
          class="btn btn-success"
          @click="changeView('Login')"
        >
          Get Start <i class="fa-solid fa-flag-checkered"></i>
        </button>
      </div>
      <div class="col container__img"></div>
    </section>
  </div>
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

<style scoped lang='scss'>
.container__text {
  display: flex;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 0.8rem;
  }
}
.container__img {
  background-image: url(https://i.ibb.co/ypXP473/time-home.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>