import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('main', {
  state: () => ({
    teams: [],
    countries: [],
    sports: [],
    leagues: [],
  }),

  actions: {
    async getItemsSelect() {
      Promise.all([
        await axios.get('api/teams'),
        await axios.get('api/sports'),
        await axios.get('api/countries'),
        await axios.get('api/leagues'),
      ]).then((values) => {
        ;(this.teams = values[0].data.results),
          (this.sports = values[1].data.results),
          (this.countries = values[2].data.results),
          (this.leagues = values[3].data.results)
      })
    },
  },
})
