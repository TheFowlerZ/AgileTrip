<template>
  <div>
    <h3>Connectez vous pour organiser votre futur voyage</h3>
    <span v-if="loginError" id="login-error"
      >Les informations entrées ne sont pas correctes</span
    >
    <div class="form-group">
      <label>Nom d'utilisateur</label>
      <input
        v-model="form.username"
        type="text"
        class="form-control form-control-lg"
      />
    </div>

    <div class="form-group">
      <label>Mot de passe</label>
      <input
        v-model="form.password"
        type="password"
        class="form-control form-control-lg"
      />
    </div>

    <button class="btn btn-dark btn-lg btn-block" @click="login()">
      Se connecter
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      username: '',
      password: '',
    },
    loginError: false,
  }),

  methods: {
    login() {
      this.$store
        .dispatch('auth/login', this.form)
        .then(() => {
          this.$router.push('/')
        })
        .catch(() => {
          this.form.password = ''
          this.loginError = true
        })
    },
  },
}
</script>

<style>
#login-error {
  color: red;
}
</style>
