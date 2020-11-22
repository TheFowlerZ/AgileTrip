<template>
  <div
    :class="
      participants.size > 0 ? 'mb-3 p-2 rounded border border-secondary' : ''
    "
  >
    <b-button class="mb-3" @click="addNewParticipant"
      >+ Ajouter un participant</b-button
    >

    <b-row v-for="participant in participants" :key="participant.id">
      <b-col cols="11">
        <Participant :id="participant.id"></Participant>
      </b-col>
      <b-col cols="1">
        <b-button variant="danger" @click="removeParticipant(participant.id)"
          >x</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    partCount: 1,
    participants: [],
  }),

  methods: {
    addNewParticipant() {
      this.participants.push({
        id: this.partCount++,
      })
    },
    removeParticipant(id) {
      this.participants = this.participants.filter(
        (participant) => participant.id !== id
      )
    },
  },
}
</script>

<style></style>
