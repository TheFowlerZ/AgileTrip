<template>
  <div>
    <h3>Créer un voyage personnalisé</h3>
    <Destination
      v-for="destination in destinations"
      :id="destination.id"
      :key="destination.id"
    ></Destination>
    <b-button @click="addDestination">+ Ajouter une destination</b-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0,
    destinations: [],
  }),
  methods: {
    addDestination() {
      this.destinations.push({
        id: this.count++,
      })
    },
  },
}
</script>

<style></style>
