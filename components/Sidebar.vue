<template>
  <v-navigation-drawer
    v-model="drawer"
    floating
    app
    color="background"
    width="180"
  >
    <div class="text-center mt-5">
      <h1 class="warning--text text-lg-h5 font-weight-bold">Freebetcoin</h1>
    </div>
    <v-divider class="mx-10 mt-3"></v-divider>
    <v-list dense class="mt-5" nav>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        link
        color="foreground"
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-list-item link dense color="foreground">
        <v-list-item-icon>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item></template
    >
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      {
        icon: 'mdi-apps',
        title: 'Dashboard',
        to: '/',
      },
      {
        icon: 'mdi-flag',
        title: 'Eventos',
        to: '/events',
      },
      {
        icon: 'mdi-chart-box',
        title: 'Estadisticas',
        to: '/charts',
      },
      {
        icon: 'mdi-account-multiple',
        title: 'Users',
        to: '/user',
      },
      {
        icon: 'mdi-cookie',
        title: 'Anuncios',
        to: '/ads',
      },
      {
        icon: 'mdi-tune-vertical',
        title: 'Configuración',
        to: '/settings',
      },
    ],
  }),
}
</script>

<style></style>
