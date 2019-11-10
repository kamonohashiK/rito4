<template>
  <v-list dense nav>
    <v-list-item-content>
      <v-list-item-subtitle>{{mapState.focusedIsland}}へ行く港</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item
      v-for="(item, index) in navState.toPorts"
      :key="item.index"
      link
      @click="selectDeparture(index)"
      @mouseenter="showDirection(item.position)"
      @mouseleave="resetMarker()"
    >
      <v-list-item-icon>
        <v-icon>mdi-anchor</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title style="font-size:16px;">{{ item.name }} ({{item.locale}})</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["mapState", "navState"])
  },
  methods: {
    selectDeparture(idx) {
      this.$store.dispatch("selectDeparture", { index: idx, fromOrTo: "to" });
    },
    showDirection(direction) {
      this.$store.commit('pushMarker', {position: direction})
    },
    resetMarker() {
      this.$store.commit('resetMarker')
    }
  }
};
</script>