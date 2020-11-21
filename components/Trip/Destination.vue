<template>
  <div class="mb-3 p-2 rounded border border-secondary">
    <h4>{{ 'Destination ' + id }}</h4>

    <b-form inline>
      <b-form-group class="m-2" label="Destination">
        <b-form-input
          v-model="destination"
          placeholder="Saisissez une destination"
        ></b-form-input>
      </b-form-group>
      <b-form-group class="m-2" label="Date de début">
        <b-form-datepicker
          :id="'date-debut' + id"
          v-model="dateDebut"
        ></b-form-datepicker>
      </b-form-group>
      <b-form-group class="m-2" label="Date de fin" :col="12">
        <b-form-datepicker
          :id="'date-fin' + id"
          v-model="dateFin"
        ></b-form-datepicker>
      </b-form-group>
      <TransportSelect class="m-2"></TransportSelect>
    </b-form>

    <div
      v-if="hasActivity"
      class="rounded border border-secondary p-2 mt-2 ml-2 mb-2"
    >
      <b-row v-for="activity in activities" :key="activity.id">
        <b-col cols="11">
          <Activity :id="activity.id"></Activity>
        </b-col>
        <b-col cols="1">
          <b-button variant="danger" @click="removeActivity(activity.id)"
            >x</b-button
          >
        </b-col>
      </b-row>
    </div>
    <b-button class="m-2" @click="addActivity">+ Ajouter une activité</b-button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    activityCount: 1,
    destination: '',
    dateDebut: '',
    dateFin: '',
    activities: [],
  }),

  computed: {
    hasActivity() {
      return this.activities.length > 0
    },
  },

  methods: {
    addActivity() {
      this.activities.push({
        id: this.activityCount++,
      })
    },

    removeActivity(id) {
      this.activities = this.activities.filter((activity) => activity.id !== id)
    },
  },
}
</script>

<style></style>
