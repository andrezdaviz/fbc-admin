<template>
  <v-row>
    <v-col cols="4">
      <v-card class="d-flex justify-center" flat color="transparent">
        <v-select
          hide-details=""
          class="shrink body-2"
          filled
          dense
          placeholder="Deporte"
          rounded
        >
        </v-select>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card class="d-flex justify-center" flat color="transparent">
        <v-select
          hide-details=""
          class="shrink body-2"
          filled
          dense
          :items="itemsCountries"
          placeholder="Pais"
          rounded
        >
        </v-select>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card class="d-flex justify-center" flat color="transparent">
        <v-select
          hide-details=""
          class="shrink body-2"
          filled
          dense
          placeholder="Liga"
          :items="items"
          rounded
        >
        </v-select>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card class="d-flex justify-center" flat color="transparent">
        <v-select
          hide-details=""
          class="body-2"
          filled
          dense
          placeholder="Equipo 1"
          rounded
          :items="itemsTeams"
        >
        </v-select>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card class="d-flex justify-center" flat color="transparent">
        <v-select
          hide-details=""
          class="body-2"
          filled
          dense
          :items="itemsTeams"
          placeholder="Equipo 2"
          rounded
        >
          <template v-slot:item="{ item, on }">
            <v-list-item link class="secondary" v-on="on">
              <v-list-item-title>
                {{ item }}
              </v-list-item-title>
            </v-list-item>
          </template>
        </v-select>
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
export default {
  data: () => ({
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
}
</script>

<style scoped>
.v-menu__content .v-list {
  padding: 0 !important;
}
</style>
