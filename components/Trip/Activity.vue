<template>
  <div>
    <b-form-group :label="'Activité ' + id">
      <b-form-input
        v-model="text"
        placeholder="Entrer une activité"
      ></b-form-input>
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
    text: '',
  }),
}
</script>

<style></style>
