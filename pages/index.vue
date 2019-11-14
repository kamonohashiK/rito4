<template>
  <v-flex xs12>
    <Map v-if="mode != 'timetable'"/>
    <Timetable v-else/>
    <PriceDialog />
    <Snackbar />
  </v-flex>
</template>

<script>
import Map from '@/components/Map.vue'
import Timetable from '@/components/Timetable.vue'
import PriceDialog from '@/components/PriceDialog.vue'
import Snackbar from '@/components/Snackbar.vue'
import { mapState, mapGetters } from "vuex"

export default {
  components: {
    Map, Timetable, PriceDialog, Snackbar
  },
  computed: {
    ...mapGetters(["mode"])
  }
};
</script>
