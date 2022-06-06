<template>
  <v-app dark :style="{ background: $vuetify.theme.themes.dark.background }">
    <v-app-bar v-if="$vuetify.breakpoint.mobile">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>

    <sidebar></sidebar>
    <v-navigation-drawer right width="240" color="background" floating app>
      secodary
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
export default {
  name: 'DefaultLayout',
  components: { Sidebar },

  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
