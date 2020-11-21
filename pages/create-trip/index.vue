<template>
  <div>
    <h3 class="mb-4">Créer un voyage personnalisé</h3>
    <b-row v-for="destination in destinations" :key="destination.id">
      <b-col cols="11">
        <Destination
          :id="destination.id"
          @delete-destination="deleteDestination()"
        ></Destination>
      </b-col>
      <b-col cols="1">
        <b-button variant="danger" @click="deleteDestination(destination.id)"
          >x</b-button
        >
      </b-col>
    </b-row>
    <b-button @click="addDestination">+ Ajouter une destination</b-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 1,
    destinations: [],
  }),
  methods: {
    addDestination() {
      this.destinations.push({
        id: this.count++,
      })
    },

    deleteDestination(id) {
      this.destinations = this.destinations.filter(
        (destination) => destination.id !== id
      )
    },
  },
}
</script>

<style></style>
