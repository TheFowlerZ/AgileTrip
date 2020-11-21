<template>
  <div class="destination-box mb-3 p-2">
    <b-form inline>
      <b-form-group class="m-2" label="Destination">
        <b-form-input
          v-model="destination"
          placeholder="Saisissez une destination"
        ></b-form-input>
      </b-form-group>
      <b-form-group class="m-2" label="Date de début">
        <b-form-datepicker
          id="date-debut"
          v-model="dateDebut"
        ></b-form-datepicker>
      </b-form-group>
      <b-form-group class="m-2" label="Date de fin" :col="12">
        <b-form-datepicker id="date-fin" v-model="dateFin"></b-form-datepicker>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    destination: '',
    dateDebut: '',
    dateFin: '',
  }),
}
</script>

<style>
.destination-box {
  border: 1px solid gray;
  border-radius: 5px;
}
</style>
