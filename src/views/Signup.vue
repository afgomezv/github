<template>
  <section class="row">
    <div class="col">
      <form class="container__form">
        <h2>Crear Cuenta</h2>
        <div class="mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Nombre Completo"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
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
        <button type="submit" class="btn btn-success">Registrase</button>
        <div class="py-4">
          <p>
            ¿Ya tengo una cuenta?
            <a href="#" @click="changeView('Login')">Ingresar</a>
          </p>
        </div>
      </form>
    </div>
    <div class="col container__img"></div>
  </section>
</template>

<script>
export default {
  name: "Signup",
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
  height: 90vh;
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
  background-image: url(https://i.ibb.co/NxYzkpt/time-signup.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
