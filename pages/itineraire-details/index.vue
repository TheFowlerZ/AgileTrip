<template>
  <div>
    <div class="row">
      <div class="col">
        <nuxt-link
          :to="{
            name: 'index',
          }"
        >
          Retour à l'accueil
        </nuxt-link>
      </div>
    </div>
    <h2>Détails pour</h2>
    <p>Neuchâtel - Barcelone, du 21.12.2019 au 05.01.2020</p>

    <table class="table" :items="etapes">
      <thead class="list-group-item">
        <td>Type</td>
        <td>Heure d'arrivée</td>
        <td>Lieu</td>
      </thead>
      <tr v-for="detail in etapes" :key="detail.id" class="list-group-item">
        <td>
          <b>{{ detail.type }}</b>
        </td>
        <td>{{ detail.heure }}</td>
        <td>{{ detail.description }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      etapes: [
        {
          id: 1,
          type: 'Départ',
          heure: '16h30',
          description: 'Neuchâtel, Suisse',
        },
        {
          id: 2,
          type: 'Départ',
          heure: '17h30',
          description: 'Neuchâtel, Suisse',
        },
        {
          id: 3,
          type: 'Arrivée',
          heure: '18h40',
          description: 'Madrid, Espagne',
        },
        { id: 4, type: 'Check in', heure: '18h40', description: 'Description' },
        {
          id: 5,
          type: 'Restaurant',
          heure: '18h40',
          description: 'Description',
        },
        { id: 6, type: 'Arrivée', heure: '18h40', description: 'Description' },
      ],
    }
  },
}
</script>

<style>
td {
  border: none !important;
  width: 160px;
}
.container {
  margin-top: 100px;
}
thead {
  background-color: rgb(155, 155, 155) !important;
}
thead td {
  font-weight: bold;
  color: white;
}
</style>
