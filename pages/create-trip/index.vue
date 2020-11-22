<template>
  <div>
    <div>
      <form-wizard
        backButtonText="Étape précédente"
        nextButtonText="Étape suivante"
        finishButtonText="Retourner à l'accueil"
        shape="tab"
        color="#e67e22"
        @on-complete="onComplete"
      >
        <h2 slot="title">Créer un voyage</h2>

        <tab-content title="Participants" icon="ti-user">
          <ParticipantsTab></ParticipantsTab>
        </tab-content>
        <tab-content
          title="Destinations, activités et hébérgements"
          icon="ti-settings"
        >
          <DestinationsTab></DestinationsTab>
        </tab-content>
        <tab-content title="Récapitulatif" icon="ti-check">
          Écran récapitulatif.
        </tab-content>
        <tab-content title="Confirmation" icon="ti-check">
          Écran de confirmation.
        </tab-content>
      </form-wizard>
    </div>
  </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import ParticipantsTab from '~/components/Tabs/ParticipantsTab.vue'
import DestinationsTab from '~/components/Tabs/DestinationsTab.vue'
export default {
  components: {
    FormWizard,
    TabContent,
    ParticipantsTab,
    DestinationsTab,
  },
}
</script>

<style></style>
