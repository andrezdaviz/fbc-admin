<template>
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
                  :ripple="false"
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
          class="rounded"
          width="14%"
          v-for="item in 10"
          :key="'#item - ' + item"
        >
          <td class="rounded-l" v-bind:class="{ opacity: item % 2 != 0 }">
            <v-list-item two-line dense>
              <v-list-item-content>
                <v-list-item-title>13:00 </v-list-item-title>
                <v-list-item-subtitle>24 Agust</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </td>
          <td v-bind:class="{ opacity: item % 2 != 0 }" width="33%">
            <v-list-item two-line dense>
              <v-list-item-content>
                <v-list-item-title>Real Madrid</v-list-item-title>
                <v-list-item-title>Manchester United</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </td>
          <td v-bind:class="{ opacity: item % 2 != 0 }" width="11%">
            <v-card class="d-flex justify-center" color="transparent" flat>
              <v-text-field
                name="name"
                hide-details=""
                dense
                number
                readonly
                background-color="secondary"
                rounded
                filled
                class="shrink body-2"
                placeholder="1.38"
                id="id"
              ></v-text-field>
            </v-card>
          </td>
          <td v-bind:class="{ opacity: item % 2 != 0 }" width="11%">
            <v-card class="d-flex justify-center" color="transparent" flat>
              <v-text-field
                name="name"
                background-color="secondary"
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
          <td v-bind:class="{ opacity: item % 2 != 0 }" width="11%">
            <v-card class="d-flex justify-center" color="transparent" flat>
              <v-text-field
                name="name"
                background-color="secondary"
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
          <td
            class="rounded-r"
            width="20%"
            v-bind:class="{ opacity: item % 2 != 0 }"
          >
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
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data: () => ({
    more: [
      'Football',
      'Basketball',
      'Football Americano',
      'Hoockie',
      'Baseball',
    ],
  }),
}
</script>

<style scoped></style>
