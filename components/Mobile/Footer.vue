<template>
  <v-footer
    dark
    padless
    absolute
  >
    <v-card
      flat
      tile
      class="blue lighten-1 white--text text-center"
      style="width:100%;"
    >
      <v-card-text class="white--text" style="font-size:18px;">
        {{footerText()}}
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text>
        <v-btn class="mx-5" text disabled>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn class="mx-5" text disabled>
        <v-icon>mdi-panorama</v-icon>
      </v-btn>

      <v-btn @click="mobileSearchMode" :color="isControlable(navState.timetable)" :disabled="navState.timetable == false" class="mx-5" text>
        <v-icon>mdi-clock</v-icon>
      </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["mode", "mapState", "navState", "timetable"])
  },
  methods: {
    footerText() {
      return this.mapState.focusedIsland == '' ? 'しまの時刻表へようこそ！' : this.mapState.focusedIsland + '(' + this.mapState.focusedLocale + ')'
    },
    isControlable(val) {
      return val ? 'white' : 'blue darken-2'
    },
    mobileSearchMode() {
      this.$store.commit('changeMode', 'mobile-search')
      console.log(this.mode)
    }
  }
}
</script>