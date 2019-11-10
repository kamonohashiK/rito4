<template>
  <v-list dense nav>
    <v-list-item-content>
      <v-list-item-subtitle>目的地を選択してください。</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item
      v-for="(item, index) in navState.arrivals"
      :key="item.index"
      link
      @click="selectArrival(index)"
    >
      <v-list-item-icon>
        <v-icon>mdi-anchor</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title style="font-size:16px;">{{ item.name }}({{ item.locale }})</v-list-item-title>
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
    selectArrival(idx) {
      this.$store.dispatch('selectArrival', {index: idx, suffix: ''})
    }
  }
};
</script>