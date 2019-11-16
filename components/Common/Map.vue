<template>
<v-flex xs12>
  <v-card>
    <GmapMap
      :center="mapState.center"
      :zoom="mapState.zoom"
      map-type-id="roadmap"
      :style="mapStyle"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in mapState.markers"
        :position="m.position"
        :title="m.title"
        :clickable="isClickable()"
        @click="selectIsland(index)"
      />
    </GmapMap>
  </v-card>
  </v-flex>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  methods: {
    selectIsland(idx) {
      this.$store.dispatch("focusIsland", idx);
    },
    isClickable() {
      return this.route.departure == "";
    }
  },
  computed: {
    ...mapGetters(["mapState", "route"]),

    mapStyle() {
      var innerHeight = window.innerHeight;
      var coefficient = 0.85;
      if (this.$device.isMobile) {
        coefficient = 0.75;
      }
      var height = innerHeight * coefficient;
      return `width: 100%; height: ${height}px;`;
    }
  }
};
</script>
