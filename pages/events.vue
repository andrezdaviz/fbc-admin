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
              color="accent"
              prepend-inner-icon="mdi-magnify"
              class="shrink"
              placeholder="Buscar por Equipo o Liga"
              filled
            >
            </v-text-field>
          </v-card>
        </v-col>
        <v-col cols="4">
          <div class="float-right">
            <v-btn color="primary" elevation="0"
              ><v-icon left>mdi-plus-circle-outline</v-icon>Evento</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-toolbar color="transparent" flat>
      <v-toolbar-title class="accent--text text-h5 ml-n4">
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
                hide-details=""
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
      <template v-slot:extension>
        <v-tabs
          id="tabEvent"
          v-model="currentItem"
          color="white"
          slider-color="primary"
        >
          <v-tab
            :ripple="false"
            class="text-capitalize caption pl-0 align-self-center"
            v-for="tab in tabs"
            :key="tab"
            :href="'#tab-' + tab"
          >
            {{ tab }}
          </v-tab>
          <v-spacer></v-spacer>

          <v-menu v-if="more.length" bottom left open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="align-self-center mr-4 caption"
                v-bind="attrs"
                v-on="on"
                small
                :ripple="false"
              >
                <v-icon left> mdi-menu-down </v-icon>
                más eventos
              </v-btn>
            </template>

            <v-list dense color="secondary">
              <v-list-item
                v-for="item in more"
                :key="item"
                @click="addItem(item)"
              >
                {{ item }}
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-divider class="mb-4"></v-divider>

    <v-card color="transparent" flat>
      <v-row justify="center">
        <v-col cols="12">
          <table></table>
          <v-divider class="mt-4"></v-divider>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import Table from '~/components/Table.vue'
export default {
  components: { Table },
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
    currentItem: 'tab-Web',
    tabs: ['Total Eventos', 'Completados', 'Pendientes', 'Cancelados'],
    more: [
      'Football',
      'Basketball',
      'Football Americano',
      'Hoockie',
      'Baseball',
    ],
  }),

  methods: {
    addItem(item) {
      console.log(item)
    },
  },
}
</script>

<style>
thead th {
  border: 0 !important;
}

tbody tr:hover {
  cursor: pointer;
  background: transparent !important;
}

tbody tr td {
  border: 0 !important;
  padding: 0 8px !important;
}

#tabEvent .v-tabs-slider-wrapper {
  padding-right: 16px;
}

#tabEvent .v-tab::before {
  display: none;
}

.v-text-field--rounded > .v-input__control > .v-input__slot {
  padding: 0 16px;
}

input {
  text-align: center;
}
</style>
