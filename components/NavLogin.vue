<template>
  <div>
    <b-nav-item-dropdown
      v-if="$store.getters['auth/isLoggedIn']"
      :text="'Connecté : ' + $store.getters['auth/loggedUser']"
    >
      <b-dropdown-item @click="logout()">Se déconnecter</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item v-else to="/login">Se connecter</b-nav-item>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('auth/logout', this.form).then(() => {
        this.$router.push('/')
      })
    },
  },
}
</script>

<style></style>
