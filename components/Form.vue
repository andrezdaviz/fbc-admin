<template>
  <v-row>
    <v-col cols="4">
      <v-card class="d-flex justify-center" flat color="transparent">
        <select-item
          select="sport"
          placeholder="Elegir Deporte"
          @input="sport($event)"
        ></select-item>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card class="d-flex justify-center" flat color="transparent">
        <select-item
          select="country"
          placeholder="Elegir Pais"
          @input="country($event)"
        ></select-item>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card class="d-flex justify-center" flat color="transparent">
        <select-item
          select="league"
          placeholder="Elegir Liga"
          :idSport="idSport"
          :idCountry="idCountry"
        ></select-item>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card class="d-flex justify-center" flat color="transparent">
        <select-item select="team" placeholder="Equipo 1"></select-item>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card class="d-flex justify-center" flat color="transparent">
        <select-item select="team" placeholder="Equipo 2"></select-item>
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card class="d-flex justify-center" flat color="transparent">
        <v-text-field
          hide-details=""
          class="shrink body-2"
          filled
          dense
          placeholder="Fecha"
          rounded
        >
          <template v-slot:prepend-inner>
            <v-icon color="opacity">mdi-calendar</v-icon>
          </template>
        </v-text-field>
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card class="d-flex justify-center" flat color="transparent">
        <v-text-field
          hide-details=""
          class="shrink body-2"
          filled
          dense
          placeholder="Hora"
          rounded
        >
          <template v-slot:prepend-inner>
            <v-icon color="opacity">mdi-clock</v-icon>
          </template>
        </v-text-field>
      </v-card>
    </v-col>
    <v-col cols="2">
      <v-card class="d-flex justify-center" flat color="transparent">
        <v-text-field
          hide-details=""
          class="shrink body-2"
          filled
          dense
          placeholder="X"
          rounded
        >
        </v-text-field>
      </v-card>
    </v-col>
    <v-col cols="2">
      <v-card class="d-flex justify-center" flat color="transparent">
        <v-text-field
          hide-details=""
          class="shrink body-2"
          filled
          dense
          placeholder="2x"
          rounded
        >
        </v-text-field>
      </v-card>
    </v-col>
    <v-col cols="2">
      <v-card class="d-flex justify-center" flat color="transparent">
        <v-text-field
          hide-details=""
          class="shrink body-2"
          filled
          dense
          placeholder="2x"
          rounded
        >
        </v-text-field>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import SelectItem from './SelectItem.vue'
export default {
  components: { SelectItem },
  data: () => ({
    event: null,
    idSport: null,
    idCountry: null,
    itemsTeams: [
      'Manchester City',
      'Brighton & Hove Albion',
      'Real Madrid',
      'Barcelona FC',
      'Royale Union Saint-Gilloise',
    ],
    itemsCountries: [
      'Ecuador',
      'Colombia',
      'Sur America',
      'Norte America',
      'America Central',
    ],
    items: [
      'Champions League',
      'Europa League',
      'Copa Libertadores',
      'Conferences League',
      'Copa Sudamericana',
    ],
  }),

  methods: {
    sport(e) {
      console.log(e)
      const id = e.target.value
      this.idSport = id
    },
    country(e) {
      const id = e.target.value
      this.idCountry = id
    },
  },
}
</script>

<style scoped>
.v-menu__content .v-list {
  padding: 0 !important;
}
</style>
