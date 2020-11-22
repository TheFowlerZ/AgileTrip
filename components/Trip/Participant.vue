<template>
  <div class="mb-1 p-2">
    <b-card header-tag="header" footer-tag="footer">
      <template #header>
        <b-row>
          <b-col align-self="center" cols="10">
            <h6 class="mb-0">Participant {{ id }}</h6>
          </b-col>
          <b-col align-self="center" cols="2" v-b-toggle.collapse-1>
            Voir les détails
          </b-col>
        </b-row>
      </template>
      <b-collapse id="collapse-1" class="mt-2">
        <b-form>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-small">Prénom :</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                v-model="participant.prenom"
                placeholder="Prénom du participant"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-small">Nom :</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                v-model="participant.nom"
                placeholder="Nom du participant"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-small">Date de naissance :</label>
            </b-col>
            <b-col sm="9">
              <b-form-datepicker
                id="example-datepicker"
                v-model="participant.dateDeNaissance"
                placeholder="Date de naissance du participant"
              ></b-form-datepicker>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-small">Passeport :</label>
            </b-col>
            <b-col sm="9">
              <b-form-file
                id="passeport"
                v-model="participant.passeport"
                browse-text="Ajouter"
                placeholder="Passeport du participant"
              ></b-form-file>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-small">Carnet de vaccination :</label>
            </b-col>
            <b-col sm="9">
              <b-form-file
                id="carnet-vaccination"
                v-model="participant.carnetDeVaccination"
                browse-text="Ajouter"
                placeholder="Carnet de vaccination du participant"
              ></b-form-file>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button class="mt-3 mb-3" @click="addParticipant(participant)"
                >Enregistrer</b-button
              ></b-col
            >
          </b-row>
        </b-form>
      </b-collapse>
    </b-card>
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
    participant: {
      id: '',
      nom: '',
      prenom: '',
      dateDeNaissance: '',
      passeport: {},
      carnetDeVaccination: {},
    },
  }),
  methods: {
    addParticipant(participant) {
      participant.id = this.id
      this.$store.commit('trip/addParticipant', participant)
      // this.participant = null
    },
  },
}
</script>

<style></style>
