<template>
  <v-container>
    <v-card color="transparent" flat>
      <v-row justify="center">
        <v-col cols="8">
          <v-card class="d-flex justify-left" color="transparent" flat>
            <v-text-field
              rounded
              dense
              background-color="secondary"
              prepend-inner-icon="mdi-magnify"
              color="accent"
              class="shrink"
              placeholder="Buscar por Equipo o Liga"
              filled
            >
            </v-text-field>
          </v-card>
        </v-col>
        <v-col cols="4">
          <div class="float-right">
            <v-btn color="info" elevation="0"
              ><v-icon left>mdi-plus-circle-outline</v-icon>Evento</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-toolbar color="transparent" flat>
      <v-toolbar-title class="text-h4 font-weight-bold accent--text ml-n4">
        Eventos
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-card color="transparent" class="mr-n4" flat>
        <v-row no-gutters justify="end">
          <v-col cols="9">
            <v-card color="transparent" class="d-flex align-center" flat>
              <v-text-field
                placeholder="4th Jun 2022"
                filled
                rounded
                prepend-inner-icon="mdi-calendar"
                background-color="secondary"
                color="accent"
                dense
                class="shrink"
              ></v-text-field
            ></v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-toolbar>
    <v-card color="transparent" flat>
      <v-row justify="center">
        <v-col cols="9">
          <v-data-table
            :style="{ background: $vuetify.theme.themes.dark.secondary }"
            :headers="headers"
            :items="items"
          >
            <template v-slot:top>
              <v-toolbar id="toolbar__data-table" color="background" flat dark>
                <div color="rgba(0,0,0,0)">
                  <v-tabs color="accent" left background-color="background">
                    <v-tab>Todos</v-tab>
                    <v-tab>Pedientes</v-tab>
                    <v-tab>Completados</v-tab>
                    <v-tab>Cancelados</v-tab>
                  </v-tabs>
                </div>
                <v-spacer></v-spacer>
                <v-select
                  hide-details
                  dense
                  reverse
                  :items="headers"
                  return-object
                  item-text="text"
                  label="Deporte"
                ></v-select>
              </v-toolbar>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    items: [],
  }),
}
</script>

<style>
#toolbar__data-table .v-toolbar__content {
  padding: 4px 0px !important;
}
</style>
