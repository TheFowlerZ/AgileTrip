<template>
  <div class="container">
    <div>
      <h1 class="title">AgileTrip</h1>
      <p>Organisez votre futur voyage.</p>
      <form>
        <div class="row">
          <div class="col">
            <label
              >Destination
              <select class="custom-select">
                <option selected>Destination</option>
                <option value="1">Barcelone</option>
                <option value="2">Madrid</option>
                <option value="3">Miami</option>
                <option value="4">Los Angeles</option>
                <option value="5">Mexico</option>
                <option value="6">Les Maldives</option>
                <option value="7">Zürich</option>
              </select>
            </label>
          </div>
          <div class="col">
            <label
              >Date d'arrivée <input type="date" class="form-control"
            /></label>
          </div>
          <div class="col">
            <label
              >Date de départ
              <input type="date" class="form-control" />
            </label>
          </div>
          <div class="col">
            <nuxt-link
              :to="{
                name: 'liste-itineraire',
              }"
            >
              Chercher un itinéraire
            </nuxt-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin-top: 250px;
}

h1 + p {
  margin-bottom: 20px;
}
</style>
