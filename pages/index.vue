<template>
  <v-flex xs12>
    <Map v-if="mapVisible" />
    <Timetable v-if="mode == 'timetable'"/>
    <MobileNav v-if="mode == 'mobile-search'"/>
    <PriceDialog />
    <Snackbar />
  </v-flex>
</template>

<script>
import Map from '@/components/Map.vue'
import Timetable from '@/components/Timetable.vue'
import PriceDialog from '@/components/PriceDialog.vue'
import Snackbar from '@/components/Snackbar.vue'
import MobileNav from "@/components/Mobile/Navigation.vue";
import { mapState, mapGetters } from "vuex"

export default {
  components: {
    Map, Timetable, PriceDialog, Snackbar, MobileNav
  },
  computed: {
    ...mapGetters(["mode"]),

    mapVisible() {
      if (this.mode == 'timetable' || this.mode == 'mobile-search') {
        return false
      } else {
        return true
      }
    },
  },
};
</script>
