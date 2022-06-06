<template>
  <v-autocomplete
    v-model="selected"
    :items="items"
    return-object
    :item-text="select"
    item-value="id"
    hide-details=""
    class="shrink body-2"
    filled
    dense
    :placeholder="placeholder"
    rounded
  >
  </v-autocomplete>
</template>

<script>
import { useStore } from '../store/index'

export default {
  props: {
    select: String,
    placeholder: String,
    idSport: { type: String, default: null },
    idCountry: { type: String, default: null },
  },
  data: () => ({
    selected: null,
    items: [],
  }),

  setup() {
    const store = useStore()
    return { store }
  },

  watch: {
    selected: {
      handler(n, a) {
        if (n != a) {
          this.onSelect(n._id)
        }
      },
      deep: true,
    },

    idSport(val) {
      if (val && this.idCountry) {
        this.filter()
      }
    },

    idCountry(val) {
      if (val && this.idSport) {
        this.filter()
      }
    },
  },

  created() {
    this.filter()
  },

  methods: {
    filter(idSport = this.idSport, idCountry = this.idCountry) {
      if (this.select == 'league') {
        this.items = this.store.leagues.filter(
          (l) => l.sport == idSport && l.country == this.idCountry
        )
        return
      }
      const options = {
        team: this.store.teams,
        sport: this.store.sports,
        country: this.store.countries,
      }[this.select]

      this.items = options
    },

    onSelect(result) {
      this.$emit('input', {
        target: {
          value: result,
        },
      })
    },
  },

  // computed: {
  //   items() {
  //     if (this.select == 'team') {
  //       return this.store.teams
  //     }
  //   },
  // },
}
</script>

<style></style>
