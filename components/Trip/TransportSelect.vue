<template>
  <div>
    <b-form-group label="Moyen de transport">
      <b-form-radio
        v-for="transport in transports"
        :key="transport.value"
        v-model="selected"
        :value="transport.value"
        >{{ transport.text }}</b-form-radio
      >
    </b-form-group>
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
    selected: null,
    transports: [
      {
        value: 1,
        text: 'Voiture',
        price: 200,
      },
      {
        value: 2,
        text: 'Avion',
        price: 500,
      },
    ],
  }),
}
</script>

<style></style>
