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
          <v-simple-table class="transparent">
            <template v-slot:default>
              <thead>
                <tr>
                  <th><v-icon left>mdi-bitcoin</v-icon> Football</th>
                  <th>
                    <v-menu v-if="more.length" bottom left open-on-hover>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          text
                          class="align-self-center text-capitalize mr-4 caption"
                          v-bind="attrs"
                          v-on="on"
                          x-small
                          :ripple="false"
                          color="accent"
                        >
                          más eventos
                          <v-icon right> mdi-menu-down </v-icon>
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
                  </th>
                  <th class="text-center">1x</th>
                  <th class="text-center">X</th>
                  <th class="text-center">2x</th>
                  <th class="text-center">Total Apuestas</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-ripple
                  @click="addItem('hola')"
                  class="rounded"
                  width="14%"
                >
                  <td class="rounded-l secondary">
                    <v-list-item two-line dense>
                      <v-list-item-content>
                        <v-list-item-title>13:00</v-list-item-title>
                        <v-list-item-subtitle>24 Agust</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </td>
                  <td class="secondary" width="33%">
                    <v-list-item two-line dense>
                      <v-list-item-content>
                        <v-list-item-title>Real Madrid</v-list-item-title>
                        <v-list-item-title>Manchester United</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </td>
                  <td class="secondary" width="11%">
                    <v-card
                      class="d-flex justify-center"
                      color="transparent"
                      flat
                    >
                      <v-text-field
                        name="name"
                        background-color="background"
                        hide-details=""
                        dense
                        rounded
                        filled
                        class="shrink body-2"
                        placeholder="1.38"
                        id="id"
                      ></v-text-field>
                    </v-card>
                  </td>
                  <td class="secondary" width="11%">
                    <v-card
                      class="d-flex justify-center"
                      color="transparent"
                      flat
                    >
                      <v-text-field
                        name="name"
                        background-color="background"
                        hide-details=""
                        dense
                        rounded
                        filled
                        class="shrink body-2"
                        placeholder="10.38"
                        id="id"
                      ></v-text-field>
                    </v-card>
                  </td>
                  <td class="secondary" width="11%">
                    <v-card
                      class="d-flex justify-center"
                      color="transparent"
                      flat
                    >
                      <v-text-field
                        name="name"
                        background-color="background"
                        hide-details=""
                        dense
                        rounded
                        filled
                        class="shrink body-2"
                        placeholder="1.38"
                        id="id"
                      ></v-text-field>
                    </v-card>
                  </td>
                  <td class="rounded-r secondary" width="20%">
                    <v-list-item dense>
                      <v-list-item-avatar class="mx-0">
                        <v-icon>mdi-bitcoin</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>2845612</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </td>
                </tr>
                <tr v-ripple class="rounded">
                  <td colspan="6">hola</td>
                </tr>
                <tr>
                  <td class="rounded secondary" colspan="6">hola</td>
                </tr>
                <tr>
                  <td class=" " colspan="6">hola</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-divider class="mt-4"></v-divider>
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
