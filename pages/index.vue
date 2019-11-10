<template>
  <v-flex xs12>
    <Map v-if="mode != 'timetable'"/>
    <Timetable v-else/>
    <PriceDialog />
  </v-flex>
</template>

<script>
import Map from '@/components/Map.vue'
import Timetable from '@/components/Timetable.vue'
import PriceDialog from '@/components/PriceDialog.vue'
import { mapState, mapGetters } from "vuex"

export default {
  components: {
    Map, Timetable, PriceDialog
  },
  computed: {
    ...mapGetters(["mode"])
  }
};
</script>
