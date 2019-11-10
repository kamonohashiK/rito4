<template>
  <v-flex xs12>
    <Map v-if="mode != 'timetable'"/>
    <Timetable v-else/>
  </v-flex>
</template>

<script>
import Map from '@/components/Map.vue'
import Timetable from '@/components/Timetable.vue'
import { mapState, mapGetters } from "vuex"

export default {
  components: {
    Map, Timetable
  },
  computed: {
    ...mapGetters(["mode"])
  }
};
</script>
