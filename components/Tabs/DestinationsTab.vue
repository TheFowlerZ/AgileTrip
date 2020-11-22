<template>
  <div
    :class="
      destinations.size > 0 ? 'mb-3 p-2 rounded border border-secondary' : ''
    "
  >
    <b-button class="mb-3" @click="addDestination"
      >+ Ajouter une destination</b-button
    >
    <b-row v-for="destination in destinations" :key="destination.id">
      <b-col cols="11">
        <Destination :id="destination.id"></Destination>
      </b-col>
      <b-col cols="1">
        <b-button variant="danger" @click="removeDestination(destination.id)"
          >x</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    destCount: 1,
    destinations: [],
  }),

  methods: {
    addDestination() {
      this.destinations.push({
        id: this.destCount++,
      })
    },

    removeDestination(id) {
      this.destinations = this.destinations.filter(
        (destination) => destination.id !== id
      )
    },
  },
}
</script>

<style></style>
