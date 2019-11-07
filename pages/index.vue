<template>
  <v-flex xs12>
    <v-card height="400" style="margin:5px;">
      <GmapMap
        :center="map_state.center"
        :zoom="map_state.zoom"
        map-type-id="roadmap"
        style="width: 100%; height: 600px;"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in map_state.markers"
          :position="m.position"
          :title="m.title"
          :clickable="true"
          :icon="hasTimeTable(m.timetable)"
          @click="clickMarker(index)"
        />
      </GmapMap>
    </v-card>
  </v-flex>
</template>

<script>
import jsonData from '~/assets/index.json'

export default {
  data() {
    return {
      map_state: {
        center: { lat: 33.865053, lng: 132.709476 }, //しばらくは三津浜港の位置で固定
        zoom: 9,
        markers: jsonData.index_items
      }
    };
  },
  methods: {
    hasTimeTable(val) {
      return val ? 'https://maps.google.com/mapfiles/ms/icons/red-dot.png' : 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    }
  },
};
</script>
