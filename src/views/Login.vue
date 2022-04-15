<template>
  <section class="row">
    <div class="col container__img"></div>
    <div class="col">
      <form class="container__form">
        <h2>Bienvenido</h2>
        <div class="mb-3 mt-3">
          <input
            type="email"
            class="form-control"
            placeholder="Correo electrónico"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            placeholder="Contreseña"
            id="exampleInputPassword1"
          />
        </div>
        <button
          type="submit"
          class="btn btn-success"
          @click="changeView('Todo')"
        >
          Ingresar
        </button>
        <div class="py-4">
          <p>
            ¿No tienes cuenta?
            <a href="#" @click="changeView('Signup')">Registrarse</a>
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
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
.container__form {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input,
  button {
    margin: 0 auto;
    width: 60%;
  }
}

.container__img {
  background-image: url(https://i.ibb.co/r64zMb1/time-login.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
