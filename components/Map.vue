<template>
  <v-card height="400" style="margin:5px;">
      <GmapMap
        :center="mapState.center"
        :zoom="mapState.zoom"
        map-type-id="roadmap"
        style="width: 100%; height: 600px;"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in mapState.markers"
          :position="m.position"
          :title="m.title"
          :clickable="true"
          :icon="hasTimeTable(m.timetable)"
          @click="selectIsland(index)"
        />
      </GmapMap>
    </v-card>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  methods: {
    hasTimeTable(val) {
      return val ? 'https://maps.google.com/mapfiles/ms/icons/red-dot.png' : 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    },
    selectIsland(idx){
      this.$store.dispatch('focusIsland', idx)
    },
  },
  computed: {
    ...mapGetters(["mapState"])
  }
}
</script>