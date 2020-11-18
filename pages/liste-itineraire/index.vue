<template>
  <div class="container">
    <div>
      <h1 class="title">AgileTrip</h1>
      <h2>Résultats d'itinéraire :</h2>
      <h2>Neuchâtel - Barcelone, du 21.12.2019 - 05.01.2020</h2>
      <hr />
      <div class="row">
        <div class="col-2">
          <div><b>Transport</b></div>
          <div
            v-for="transport in transports"
            :id="transport.id"
            :key="transport.id"
          >
            <label
              >{{ transport.label }} <input value="value" type="checkbox"
            /></label>
          </div>
        </div>
        <div class="col-2">
          <div><b>Escales</b></div>
          <div v-for="escale in escales" :id="escale.id" :key="escale.id">
            <label
              >{{ escale.label }} <input value="value" type="checkbox"
            /></label>
          </div>
        </div>
      </div>
      <div v-for="it in itineraires" :key="it.id" class="row itineraire-row">
        <div class="col">
          <span>{{ it.title }}</span>
          <nuxt-link
            :to="{
              name: 'itineraire-details',
            }"
          >
            Voir les détails
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itineraires: [
        {
          id: 1,
          title: 'Proposition 1',
        },
        {
          id: 2,
          title: 'Proposition 2',
        },
        {
          id: 3,
          title: 'Proposition 3',
        },
        {
          id: 4,
          title: 'Proposition 4',
        },
      ],
      transports: [
        {
          id: 1,
          label: 'Voiture',
        },
        {
          id: 2,
          label: 'Avion',
        },
      ],
      escales: [
        {
          id: 1,
          label: 'Madrid',
        },
        {
          id: 2,
          label: 'Monaco',
        },
      ],
    }
  },
}
</script>

<style>
.container {
  margin-top: 250px;
}

h1 + p {
  margin-bottom: 20px;
}
.itineraire-row {
  padding: 10px;
  margin: 5px;
  border: 1px solid gray;
}
</style>
