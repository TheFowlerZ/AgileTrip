<template>
  <div>
    <h1 class="title">AgileTrip</h1>
    <p>Insérer photos, promo, etc...</p>
    <button class="btn btn-dark btn-lg btn-block" @click="createTrip()">
      Créer un voyage dès maintenant
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    createTrip() {
      if (this.$store.getters['auth/isLoggedIn']) {
        this.$router.push('/create-trip')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
</script>

<style>
h1 + p {
  margin-bottom: 20px;
}
</style>
